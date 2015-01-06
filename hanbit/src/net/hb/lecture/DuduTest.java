package net.hb.lecture;

import java.awt.*;
import java.awt.event.*;

import javax.swing.*;
class Dudu extends JFrame implements ActionListener, Runnable{
	ImageIcon ii = new ImageIcon("dudu.jpg");
	private JButton jbt[] = new JButton[12];
	private JButton start = new JButton("����");
	private JButton end = new JButton("����");
	private JLabel jlb = new JLabel("���� : 0");
	private JLabel time_jlb = new JLabel("�ð� => 0:10");
	private BorderLayout bl = new BorderLayout(10,10);
	private JPanel jp1 = new JPanel();
	private GridLayout gl1 = new GridLayout(3,4);
	private JPanel jp2 = new JPanel();
	private GridLayout gl2 = new GridLayout(1,2);
	private JPanel jp21 = new JPanel();
	private FlowLayout fl21 = new FlowLayout(FlowLayout.RIGHT);
	private int randomsu = 0;
	private int count = -1;
	
	public Dudu(String title){
		super(title);
		this.init();
		this.start();
		super.setSize(350,250);
		jlb.setFont(new Font("�ü�ü", Font.BOLD ,14 ));
		time_jlb.setFont(new Font("�ü�ü", Font.BOLD ,14 ));
		
		Dimension screen = Toolkit.getDefaultToolkit().getScreenSize();
		int xpos = (int)(screen.getWidth()/2 - super.getWidth()/2);
		int ypos = (int)(screen.getHeight()/2 - super.getHeight()/2);
		super.setLocation(xpos, ypos);
		super.setResizable(false);
		super.setVisible(true);
	}
	public void init(){
		Container con = this.getContentPane();
		con.setLayout(bl);
		con.add("North", time_jlb);
		con.add("Center", jp1);
		jp1.setLayout(gl1);
		for(int i=0; i<12; ++i){
			jbt[i] = new JButton();
			jp1.add(jbt[i]);
		}
		off_button();
		con.add("South", jp2);
		jp2.setLayout(gl2);
		jp2.add(jlb);
		jp2.add(jp21);
		jp21.setLayout(fl21);
		jp21.add(start);
		jp21.add(end);
	}
	public void start(){
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		start.addActionListener(this);
		end.addActionListener(this);
		for(int i=0; i<12; ++i){
			jbt[i].addActionListener(this);
		}
	} //end

	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == start){
			time_jlb.setText("�ð� => 0:10");
			jlb.setText("���� : 0");
			count=-1;
			Thread th = new Thread(this);
			th.start();
			on_button();
			random(0);
		}else if (e.getSource() == end){
			System.exit(0);
		}
		for(int i=0; i<12; ++i){
			if (e.getSource() == jbt[i]){
				random(i);
			}
		}
	} //end

	public void off_button(){
		for(int i=0; i<12; ++i){
			jbt[i].setEnabled(false);
		}
	} //end

	public void on_button(){
		for(int i=0; i<12; ++i){
			jbt[i].setEnabled(true);
		}
	} //end

	public void run(){
		int time = 10;
		while(true){
			try{
				Thread.sleep(1000);
			}catch(InterruptedException e){}
			time--;
			if (time == 0) {
				time_jlb.setText("������ �������ϴ�.");
				off_button();
				break;
			}
			time_jlb.setText("�ð� => 0:0"+time);
		}
	} //end

	public void random(int i){
		if (i != randomsu) return;
		count++;
		jbt[randomsu].setIcon(null);
		randomsu = (int)(Math.random() * 12);
		jbt[randomsu].setIcon(ii);
		jlb.setText("���� : " + count);
		
	}
} //end

public class DuduTest {
	public static void main(String[] ar) {
		Dudu  ob = new Dudu("�δ�������");
	}
} //class end
