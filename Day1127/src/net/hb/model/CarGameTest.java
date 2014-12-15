package net.hb.model;

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
				img = ImageIO.read(new File("C:/Mtest/img/kuma.gif"));
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
			repaint();
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

		
} //class END
