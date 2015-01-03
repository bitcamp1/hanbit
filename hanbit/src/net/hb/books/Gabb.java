package net.hb.books;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.GridLayout;
import java.awt.Image;
import java.awt.Label;
import java.awt.Panel;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

@SuppressWarnings("serial")
	class GabbGame extends JFrame implements ActionListener{
	private BorderLayout bl = new BorderLayout();
	private JButton jbt1 = new JButton("바위");
	private JButton jbt2 = new JButton("SCISSORS");
	private JButton jbt3 = new JButton("PAPER");
	private JButton jbt4 = new JButton("MATCH");
	private JButton jbt5 = new JButton("AGAIN");
	private JButton jbt6 = new JButton("CLOSE");
//	Image img = Toolkit.getDefaultToolkit().getImage("C:\\Mtest\\my3\\workspace\\img\\fastrcp.gif");
	Image img = Toolkit.getDefaultToolkit().getImage("img\\fastrcp.gif");
	
	private int[] result = new int[3];
	private JLabel lb = new JLabel("키를 눌러주세요" );
	private JPanel jp1 = new JPanel();
	private JPanel jp2 = new JPanel();
	//private Panel jp3 = new Panel();
	
	private GridLayout gl1 = new GridLayout(6,1,10,10);
	
	public GabbGame(String title) {
		super("가위바위보");
		
		this.init();
		this.start();
		
		super.setSize(600,400);
		Dimension screen = Toolkit.getDefaultToolkit().getScreenSize();
		Dimension f1 = super.getSize();
		int xpos = (int)(screen.height/2 - f1.height/2);
		int ypos = (int)(screen.width/2 - f1.width/2);
		super.setLocation(xpos, ypos);
		super.setResizable(false);
		super.setVisible(true);
	}
	public void paint(Graphics g) {
		g.drawImage(img, 70, 100, 420, 250, this);
	}
	
	public void init(){
		this.setLayout(bl);
		this.add("North", jp1);
		jp1.add(lb);
		this.add("East", jp2);
		jp2.setLayout(gl1);
		jp2.add(jbt1);
		jp2.add(jbt2);
		jp2.add(jbt3);
		jp2.add(jbt4);
		jp2.add(jbt5);
		jp2.add(jbt6);
	}

	public void start(){
		jbt1.addActionListener(this);
		jbt2.addActionListener(this);
		jbt3.addActionListener(this);
		jbt4.addActionListener(this);
		jbt5.addActionListener(this);
		jbt6.addActionListener(this);
	}
	@Override
	public void actionPerformed(ActionEvent e) {
		int x = (int)(Math.random()*3)+1;
		if (x == 1) img = Toolkit.getDefaultToolkit().getImage("img\\r.jpg");
		
		//C:\\Mtest\\my3\\workspace\\img\\r.jpg
		
		//C:\\Mtest\\img\\r.jpg
		else if (x == 2) img = Toolkit.getDefaultToolkit().getImage("img\\c.jpg");
		else img = Toolkit.getDefaultToolkit().getImage("img\\p.jpg");
		repaint();

		if(e.getSource() == jbt1) {
			if (x == 1) {
				lb.setText("You are tie");
				++result[1];
			}
			else if (x==2) {
				lb.setText("You Win !!");
				++result[0];
			}
			else {
				lb.setText("You Loose");
				++result[2];
			}
			
		}else if (e.getSource() == jbt2) {
			if (x == 2) {
				lb.setText("You are tie");
				++result[1];
			}
			else if (x==3) {
				lb.setText("You Win !!");
				++result[0];
			}
			else {
				lb.setText("You Loose");
				++result[2];
			}
			
		}else if (e.getSource() == jbt3) {
			if (x == 3) { 
				lb.setText("You are tie");
				++result[1];
			}
			else if (x==1) {
				lb.setText("You Win !!");
				++result[0];
			}
			else {
				lb.setText("You Loose");
				++result[2];
			}
			
		}else if (e.getSource() == jbt4) {
			lb.setText("Message : Win : " + result[0] + 
								"Tie : " + result[1] + "Loose : " + result[2]);

		}else if (e.getSource() == jbt5) {
			img = Toolkit.getDefaultToolkit().getImage("img\\fastrcp.gif");
			lb.setText("Please Press ths Keys");
			repaint();
		}else if (e.getSource() == jbt6) {
			System.exit(0);
		}
	}

}
public class Gabb {
	public static void main(String[] ar) {
		GabbGame ex = new GabbGame("가위 바위 보 게임");
	}
}

