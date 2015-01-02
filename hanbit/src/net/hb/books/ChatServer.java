package net.hb.books;

import java.awt.BorderLayout;
import java.awt.HeadlessException;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;

import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class ChatServer extends JFrame implements ActionListener{
	
	/**
	 http://blog.naver.com/codecat_/220185507858 
	 */
	private static final long serialVersionUID = 1L;
	BufferedReader in = null;
	BufferedWriter out = null;
	ServerSocket listener = null;
	Socket socket = null;
	JTextField serverMsg;
	JScrollPane scroll;
	Receiver clientMsg;
	
	
	
	
	public ChatServer() throws HeadlessException {
		setTitle("서버채팅창");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		clientMsg = new Receiver();
		clientMsg.setEditable(false); // 편집불가
		
		Thread th = new Thread(clientMsg);
		
		serverMsg = new JTextField();
		serverMsg.addActionListener(this);
		scroll = new JScrollPane(clientMsg);
		
		add(scroll,BorderLayout.CENTER);
		add(serverMsg,BorderLayout.SOUTH);
		setSize(400,200);
		setVisible(true);
		
		try {
			setupConnection();
		} catch (Exception e) {
			handleError(e.getMessage());
			e.printStackTrace();
		}
		th.start();
	}
	@Override
	public void actionPerformed(ActionEvent e) {
		if(e.getSource()==serverMsg){
			String outputMsg = serverMsg.getText();
			try {
				out.write("\n서버 : "+outputMsg);
				int pos = clientMsg.getText().length();
				clientMsg.setCaretPosition(pos);
				
				serverMsg.setText(null);
			} catch (Exception e2) {
				handleError(e2.getMessage());
				e2.printStackTrace();
			}
		}
		
		
		
	}
	private void  setupConnection() throws IOException{
		listener = new ServerSocket(9999);
		socket = listener.accept();
		
		System.out.println("연결됨");
		
		in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
		out = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
	}
	
	private class Receiver extends JTextArea implements Runnable{

		@Override
		public void run() {
			String inputMsg = null;
			while(true){
				try {
					inputMsg = in.readLine();
				} catch (Exception e) {
					handleError(e.getMessage());
					e.printStackTrace();
				}
				clientMsg.append("\n"+inputMsg);
				int pos = clientMsg.getText().length();
				clientMsg.setCaretPosition(pos);
			}
			
		}
	}
	private static void handleError(String str){
		System.out.println(str);
		System.exit(1);
	}
	public static void main(String[] args) {
		new ChatServer();
	}

}
