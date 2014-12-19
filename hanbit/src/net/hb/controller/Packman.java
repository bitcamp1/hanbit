package net.hb.controller;

import java.awt.Color;
import java.awt.Frame;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.Toolkit;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.File;


public class Packman extends Frame implements KeyListener, Runnable {
	
	Image image;
	Image wall;
	int x,y,mx,my,sel;
	int[][] area = 
{	{1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1},
	{1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1},
	{1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1},
	{1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1},
	{1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1},
	{1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1},
	{1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1},
	{1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1},
	{1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1},
	{1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1},
	{1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1},
	{1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1},
	{1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1},
	{1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1},
	{1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1},
	{1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1}
};
			

	public Packman(){
		super("팩맨 게임");
		x=400; y=425; mx=0; my=0; sel=0;
		
		setBackground(Color.black);
		
		wall = Toolkit.getDefaultToolkit().getImage("img"+File.separator+"wall.png");
		image = Toolkit.getDefaultToolkit().getImage("img"+File.separator+"packman.png");
//		Thread t = new Thread(this);
//		t.start();  갑자기 주석처리 시켜버린다.
		
		
		addKeyListener(this);
		addWindowListener(new WindowAdapter(){
		public void windowClosing(WindowEvent e) {
			System.exit(1);
		}
		});
		setBounds(20,20,800,825);
		setVisible(true);
		
		run(); // 위  Thread 주석처리 후 무한루프 때문에 첨가
		
	}
	
	public void paint(Graphics g){
		for(int i = 0; i < area.length;i++){
			for(int j=0;j<area[i].length;j++){
				if(area[i][j]==1)
				g.drawImage(wall, j*50, i*50+25, this);
			}
		}
		g.drawImage(image, x, y, x+50, y+50, sel*50, 0, sel*50+50, 50, this);
	}
	
	
	public static void main(String[] args) {
		new Packman();
	}

	public void keyTyped(KeyEvent e) {}
	public void keyReleased(KeyEvent e) {}
	public void keyPressed(KeyEvent e) {
		if(e.getKeyCode()==e.VK_LEFT){
			mx=-10;
			my=0;
			sel = 0;
		}else if(e.getKeyCode()==e.VK_RIGHT){
			mx=10;
			my=0;
			sel = 6;
		}else if(e.getKeyCode()==e.VK_UP){
			mx=0;
			my=-10;
			sel = 2;
		}else if(e.getKeyCode()==e.VK_DOWN){
			mx=0;
			my=10;
			sel = 4;
		}else if(e.getKeyCode()==e.VK_ESCAPE){
			System.exit(1);
		}
	}
	
	public void run() {
		while(true){
			x+=mx;
			y+=my;
// 주석처리 되었던 부분
			for(int i=0;i<area.length;i++){
				for(int j = 0 ; j<area[i].length;j++){
						if(x>j*50 && x<((j+1)*50) && 
						   y>i*50+25 && y<((i+1)*50)+25){
						System.out.println(i+", "+j);}
				}
				}
			
			if(x>1*50 && x<((1+1)*50) && 
			   y>1*50+25 && y<((1+1)*50)+25){
	
					System.out.println(x+", "+y);
					mx=0; my=0;}
// 주석처리 되었던 부분			
			if(x>3*50 && x<((3+1)*50) && 
					   y>3*50+25 && y<((3+1)*50)+25){
						System.out.println(x+", "+y);}
			
			if(sel%2==0)sel++;
			else sel--;
			
			if(x<=0 || x>=750 ){
				mx=0;
				if( y<=25 || y>=750){
					my=0;
				}
			}else if( y<=25 || y>=750){
				my=0;
				if(x<=0 || x>=750 ){
					mx=0;
				}
			}
			try{
				Thread.sleep(80);
				repaint();
			}catch(Exception e){}
		}
	}


}

