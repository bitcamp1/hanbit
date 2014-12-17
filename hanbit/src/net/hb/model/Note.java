package net.hb.model;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.TextEvent;
import java.awt.event.TextListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.border.Border;


public class Note extends JFrame{
	private static final long serialVersionUID = 1L;
	
	private JTextArea ta;
	private JMenuBar menubar;
	private JTextField tf;
	private JPanel pan_center,pan_south;
	private JMenu menu_file,menu_edit,menu_form,menu_help;
	private JButton btn_send, btn_exit;
	private JLabel lbl_info;
	
	public Note(){
		super("제목없음 - NoName");
		init();
		
	}
	
	void init(){
		tf_init();
		menu_init();
		lbl_init();
		btn_init();
		
		frame_init();
		ta_init();
		pan_init();
		setVisible(true);
	}
	void frame_init(){
		setBackground(Color.yellow);
		setBounds(1000,30,400,450);
		addWindowListener(new WindowClosing());  
	}
	
	void menu_init(){
		menubar = new JMenuBar();
		menu_file = new JMenu("파일");
		menu_edit = new JMenu("편집");
		menu_form = new JMenu("서식");
		menu_help = new JMenu("도움");
		menu_file.addActionListener(new MenuActionListener());
		menu_edit.addActionListener(new MenuActionListener());
		menu_form.addActionListener(new MenuActionListener());
		menu_help.addActionListener(new MenuActionListener());
		menubar.add(menu_file);
		menubar.add(menu_edit);
		menubar.add(menu_form);
		menubar.add(menu_help);
		setJMenuBar(menubar);
	}
	void lbl_init(){
		lbl_info = new JLabel("입 력 :");
	}
	
	void btn_init(){
		btn_send = new JButton("전 송");
		btn_exit = new JButton("종 료");
		btn_send.addActionListener(new ButtonActionListener());
		btn_exit.addActionListener(new ButtonActionListener());
	}
	void tf_init(){
		tf = new JTextField(15);
		
	}
	void ta_init(){
		ta = new JTextArea();
		ta.setBackground(Color.yellow);
		ta.setEnabled(true);
	}
	void pan_init(){
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
	
	
	public void message(){
		String data = tf.getText();
		ta.append(data+"\n");
		tf.setText("");
		tf.requestFocus();
	}
	class WindowClosing extends WindowAdapter{

		@Override
		public void windowClosing(WindowEvent we) {
			System.exit(0);
		}
		
	}
	class ButtonActionListener implements ActionListener{
		
		@Override
		public void actionPerformed(ActionEvent e) {
			Object btn = e.getSource();
			if(btn==btn_send)message();
			else if(btn==btn_exit)System.exit(0);
			else JOptionPane.showMessageDialog(null, "선택값이 범위에 없는 오류입니다.");
		}
		
		
	}
	class MenuActionListener implements ActionListener{

		@Override
		public void actionPerformed(ActionEvent e) {
			Object menu = e.getSource();
			if(menu==menu_file)ta.setText("jjjjjjj");
			else if(menu==menu_edit);
			else if(menu==menu_form);
			else if(menu==menu_help);
			else ;
			
		}
		
	}
	public static void main(String[] args) {
		new Note();
	}

	


	
}
