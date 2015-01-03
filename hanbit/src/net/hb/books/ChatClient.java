package net.hb.books;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.net.Socket;

import javax.swing.JFrame;
import javax.swing.JTextArea;

public class ChatClient extends JFrame implements ActionListener{
	
	BufferedReader in = null;
	BufferedWriter out = null;
	Socket socket = null;
	
	
	@Override
	public void actionPerformed(ActionEvent e) {
		// TODO Auto-generated method stub
		
	}
	public class Receiver extends JTextArea implements Runnable{

		@Override
		public void run() {
			String inputMsg = null;
			while(true){
				try {
					inputMsg = in.readLine();
							
				} catch (Exception e) {
					// TODO: handle exception
				}
			}
			
		}
	}
	public static void main(String[] args) {
		new ChatClient();
	}
}
