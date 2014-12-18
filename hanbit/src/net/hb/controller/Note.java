package net.hb.controller;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.MenuItem;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.io.File;

import javax.swing.ImageIcon;
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


public class Note extends JFrame{
	private static final long serialVersionUID = 1L;
	
	private JTextArea ta;
	private JMenuBar menubar;
	private JTextField tf;
	private JPanel pan_center,pan_south;
	private JMenu menu_file,menu_edit,menu_form,menu_help,menu_view;
	private JButton btn_send, btn_exit;
	private JLabel lbl_info;
	private ImageIcon icon_a, icon_b;
	private JMenuItem m_copy, m_paste, m_cut, m_version, 
						m_exit, m_open, m_save, m_new, m_file, m_edit, m_help;

	
	public Note(){
		super("제목없음 - NoName");
		init();
	}
	
	void init(){
		setTextArea();
		setTextFields();
		setLabels();
		setIcons();
		setButtons();
		setPanes();
		
		setMenu();
		setMbar();
		setFrame();
	}
	void setMbar() {
		menubar = new JMenuBar();
		menubar.add(menu_file);
		menubar.add(menu_edit);
		menubar.add(menu_form);
		menubar.add(menu_view);
		menubar.add(menu_help);
		
	}

	void setFrame(){
		setJMenuBar(menubar);
		setBackground(Color.yellow);
		setBounds(1000,30,400,450);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setResizable(false);
		setVisible(true);
		
	}
	
	void setMenu(){
		menu_file = new JMenu("파일(F)");
		menu_edit = new JMenu("편집(E)");
		menu_form = new JMenu("서식(O)");
		menu_view = new JMenu("보기(V)");
		menu_help = new JMenu("도움말(H)");
		setMenuItems();
	
		
	}
	void setLabels(){
		lbl_info = new JLabel("입 력 :");
	}
	
	void setButtons(){
		btn_send = new JButton(icon_a); // "전 송"
		btn_exit = new JButton(icon_b);// "종 료"
		btn_send.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				message();
			}
		});
		btn_exit.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				exit();
			}
		});
		
	}
	void setMenuItems(){
		m_copy=new JMenuItem("복 사");
		m_paste=new JMenuItem("붙여넣기");
		m_cut=new JMenuItem("잘라내기");
		m_version=new JMenuItem("버 전"); 
		m_exit=new JMenuItem("닫 기");
		m_open=new JMenuItem("열 기");
		m_save=new JMenuItem("저 장");
		m_new=new JMenuItem("새파일");
		m_file=new JMenuItem("파 일");
		m_edit=new JMenuItem("편 집");
		m_help=new JMenuItem("도움말");
		
		menu_file.add(m_new);
		menu_file.addSeparator();
		menu_file.add(m_save);
		menu_file.add(m_open);
		menu_file.add(m_exit);
		
		menu_edit.add(m_copy);
		menu_edit.add(m_cut);
		menu_edit.add(m_paste);
		
		menu_help.add(m_version);
		
		m_new.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				fileNew();
				
			}
		});
		m_save.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				fileSave();
				
			}

			
		});
		m_open.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				fileOpen();
				
			}

			
		});
		m_exit.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				System.exit(0);
				
			}
		});
	}
	void setTextFields(){
		tf = new JTextField(15);
		
	}
	
	void setTextArea(){
		ta = new JTextArea();
		ta.setBackground(Color.yellow);
		ta.setEnabled(true);
	}
	void setPanes(){
		pan_center = new JPanel();
		pan_center.setLayout(new BorderLayout());
		pan_center.add("Center",ta);
		add("Center",pan_center);
		pan_south = new JPanel();
		pan_south.setLayout(new FlowLayout());
		pan_south.add(lbl_info);
		pan_south.add(tf);
		pan_south.add(btn_send);
		pan_south.add(btn_exit);
		add("South",pan_south);
		
	}
	void setIcons(){
		icon_a=new ImageIcon("img"+File.separator+"icon_a.gif");
		icon_b=new ImageIcon("img"+File.separator+"icon_b.gif");
	}
	private void exit() {
		System.exit(0);
		
	}
	void send() {
		// TODO Auto-generated method stub
		
	}
	public void message(){
		
		ta.append(tf.getText()+"\n");
		tf.setText("");
		tf.requestFocus();
	}
	void fileNew(){
		setTitle("NoName");
		tf.setText("");
		ta.setText("");
		tf.requestFocus();
	}
	void fileSave() {
		// TODO Auto-generated method stub
		
	}
	void fileOpen() {
		// TODO Auto-generated method stub
		
	}
	public static void main(String[] args) {
		new Note();
	}

	


	
}
