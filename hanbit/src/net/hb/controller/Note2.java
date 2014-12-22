package net.hb.controller;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.GridLayout;
import java.awt.Image;
import java.awt.LayoutManager;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.io.File;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class Note2 {
	
	private JTextArea ta;
	private JTextField tf_input;
	private JLabel lbl_input;
	private JButton btn_submit;
	private JButton btn_exit;
	private Font font;
	private int fontSize;
	private JPanel chat_sth;
	private JPanel chat_cntr;
	private JMenuBar mnubar;
	private JMenu mnu_room;
	private JMenu mnu_name;
	private JMenu mnu_info;
	private JMenuItem itm_exit;
	private JMenuItem itm_invite;
	private JMenuItem itm_group;
	private JFrame chat_frm;
	private JFrame login_frm;
	private JPanel login_pnl;
	public  Note2(){
		init();
	}
	private void init() {
		
		
		initLogin();
		listUI();
		roomUI();
		chatUI();
		
		initChat();
	}
	
	void initChat(){
		
		chatUI();
		chat_frm.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		chat_frm.setBounds(20,20,400,600);
	//	chat_frm.setVisible(true);
	}
	void initLogin(){
//		loginUI();
		login_frm.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		login_frm.setBounds(20,20,400,600);
		login_frm.setVisible(true);
	}
	
	void initRoom(){
		roomUI();
	}
	void initList(){
		listUI();
	}
	void loginUI(Image img, LayoutManager layout){

		login_frm = new JFrame("로그인");
		JPanel pnl = new JPanel();
		img=null;
		Dimension size = new Dimension(img.getWidth(null),img.getHeight(null));
		pnl.setPreferredSize(size);
		pnl.setMinimumSize(size);
		pnl.setMaximumSize(size);
		pnl.setSize(size);
		pnl.setLayout(layout);
	}
	


	private void listUI() {
		// TODO Auto-generated method stub
		
	}



	private void roomUI() {
		// TODO Auto-generated method stub
		
	}



	private void chatUI() {
		chat_frm = new JFrame();
		chat_cntr = new JPanel();
		chat_cntr.setLayout(new BorderLayout());  
		ta = new JTextArea();
		chat_cntr.add("Center", ta);
		ta.setBackground(Color.yellow);
		ta.setEnabled(false);
		chat_frm.add("Center", chat_cntr);
		chat_sth = new JPanel();
		chat_sth.setLayout(new FlowLayout());
		lbl_input = new JLabel("입력");
		lbl_input.setFont(new Font("돋움체",Font.BOLD,15));
		lbl_input.setSize(100,20);
		chat_sth.add(lbl_input);
		tf_input = new JTextField(15);
		chat_sth.add(tf_input);
		btn_submit = new JButton("전송");
		btn_submit.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
		//		ta.append(tf_input.getText());
				tf_input.setText("");
				tf_input.requestFocus();
				
			}
		});
		chat_sth.add(btn_submit);
		btn_exit = new JButton("종료");
		btn_exit.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				System.exit(0);
				
			}
		});
		chat_sth.add(btn_exit);
		chat_frm.add("South",chat_sth);
		mnubar = new JMenuBar();
		mnu_room = new JMenu("◀");
		mnu_room.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				
			}
		});
		mnu_name = new JMenu("홍길동");
		mnu_name.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				
			}
		});
		mnu_info = new JMenu("三");
		mnu_info.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				
			}
		});
		mnubar.add(mnu_room);
		mnubar.add(mnu_name);
		mnubar.add(mnu_info);
		chat_frm.add("North",mnubar);
		itm_invite = new JMenuItem("대화상대 초대");
		itm_invite.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				
			}
		});
		itm_group = new JMenuItem("그룹 만들기");
		itm_group.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				
			}
		});
		itm_exit = new JMenuItem("나가기");
		itm_exit.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				JOptionPane.showConfirmDialog(null, "정말 나가십니까?");
				
			}
		});
		mnu_info.add(itm_invite);
		mnu_info.add(itm_group);
		mnu_info.add(itm_exit);
	}
	public static void main(String[] args) {
		new Note2();
	}
	class SignIn extends JFrame{
		private static final long serialVersionUID = 1L;
		Image loginImg;
		private int x;
		private int y;
		private int mx;
		private int my;
		// http://stackoverflow.com/questions/16596898/java-jpanel-with-background-image-and-normal-functionality
		public SignIn(){
			
			super("카카오톡");
	//		img = Toolkit.getDefaultToolkit().getImage("img"+File.separator+"kuma.gif");
			x=225;
			y=225;
			mx=0;
			my=0;
	//		this.img = img
					login_frm = new JFrame();
					login_frm.setTitle("KakaoTalk");
					login_pnl = new JPanel();
					login_pnl.setBackground(Color.yellow);
					login_pnl.setLayout(new GridLayout());
			
		}
		
		
	}
	class Login extends JPanel{
		private Image img;
		public Login(LayoutManager layout){
			super(layout);
		}
		public Login(Image img, LayoutManager layout){
			this(layout);
			this.img = img;
		}
	}
	class FontConfig extends KeyAdapter{
		private int size;
		private final int sizeGap=5;

		@Override
		public void keyPressed(KeyEvent e) {
			int keyCode = e.getKeyCode();
			switch(keyCode){
				case KeyEvent.VK_UP: size += sizeGap;break;
				case KeyEvent.VK_DOWN:
					if(fontSize>5){
						fontSize -= sizeGap;
						lbl_input.setFont(new Font("돋움체",Font.BOLD,fontSize));
					}else{
						System.out.println("폰트 사이즈는"+sizeGap+"이하로 줄일 수 없습니다. ");
					}break;
					default : System.out.println();
				
			}
		}
	}

	
	

}
