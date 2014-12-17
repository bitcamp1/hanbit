package net.hb.controller;

import java.awt.*;
import java.awt.event.*;
import java.awt.image.BufferedImage;
import java.io.*;

import javax.imageio.ImageIO;
import javax.swing.*;

	class YouPanel extends JPanel {
		private static final long serialVersionUID = 1L;
			BufferedImage img = null;
			int img_x = 50, img_y = 50;
			
			public  YouPanel( ){
				try {
					img = ImageIO.read(new File("img\\kuma.gif"));
					this.setBackground(Color.green) ;
				} catch (IOException e) {
					System.out.println("IOException.....");
					System.exit(1);
				}
		
		addKeyListener(new KeyListener() { 
			public void keyPressed(KeyEvent e) {
				int keycode = e.getKeyCode();
				switch (keycode) {
				case KeyEvent.VK_UP:	img_y -= 10;	 break;
				case KeyEvent.VK_DOWN:	img_y += 10;	break;
				case KeyEvent.VK_LEFT:	img_x -= 10; if( img_x<=-30){ img_x=350;}	break;
				case KeyEvent.VK_RIGHT:	img_x += 10; if( img_x>=360){ img_x=-10;}	break;
				}
				repaint(); // paint(Graphics g) => repaint() 메소드로 호출
				// 진짜 메소드 호출 대신 다른 메소드 이름으로 호출
			}
			public void keyReleased(KeyEvent arg0) {		}
			public void keyTyped(KeyEvent arg0) {			}

	});
	this.requestFocus();
	setFocusable(true);
	}
	
	public void paintComponent(Graphics g) {
			super.paintComponent(g);
			String pos="x=" + img_x  +"  y="+img_y;
			g.drawString(pos, 10,30);
			g.drawImage(img, img_x, img_y, null);
		}
	}

	public class CarGameTest  extends JFrame {
		public CarGameTest() {
			setBounds(200,200,400, 300);
			setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
			add(new YouPanel());
			setVisible(true);
		}
		public static void main(String[] args) {
			new CarGameTest();
			
		}
	
			
	} //class END
