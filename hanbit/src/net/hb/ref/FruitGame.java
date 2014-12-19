package net.hb.ref;

import java.awt.*;
import java.awt.event.*;

import javax.swing.*;

class FruitGame extends JFrame implements ActionListener, Runnable {
	private int num1, num2, num3;
	private int time = 20;
	private Container con = null;
	private JButton jbt[] = new JButton[16]; // ��ư16��
	private int ransu[] = new int[16]; // �̹����� ����� ��° ��
	private JLabel jlb = new JLabel("�޼���: ^ ����� ����^ ");
	private JLabel time_jlb = new JLabel("���۹�ưŬ�� ���ӽ���");
	private BorderLayout bl = new BorderLayout();
	private JPanel jp1 = new JPanel();
	private GridLayout gl1 = new GridLayout(4, 4);
	private JButton start_bt = new JButton("����");
	private JButton exit_bt = new JButton("����");
	private JPanel jp2 = new JPanel();
	private GridLayout gl2 = new GridLayout(2, 1);
	private int score = 0; // ����
	private int score1 = 15; // ���� x

	public void ransu() {
		for(int i = 0; i < 16; i++){
			ransu[i] = (int)(Math.random() * 16);
			for(int j = 0; j < i; j++){
				if(ransu[i] == ransu[j]) i--;
			}
		} //i end
	} //end

	public void mix() {
		for (int i = 0; i < 16; ++i) {
			if (ransu[i] == 0 || ransu[i] == 1 || ransu[i] == 2) {
				String filename = "good1.jpg";
				jbt[i].setIcon(new ImageIcon(filename));
			} else if(ransu[i] == 3 || ransu[i] == 4 || ransu[i] == 5 || ransu[i] == 6){
				String filename = "good2.jpg";
				jbt[i].setIcon(new ImageIcon(filename));
			} else if(ransu[i] == 7 || ransu[i] == 8 || ransu[i] == 9 || ransu[i] == 10){
				String filename = "good3.jpg";
				jbt[i].setIcon(new ImageIcon(filename));
			} else if(ransu[i] == 11 || ransu[i] == 12 || ransu[i] == 13
					|| ransu[i] == 14 || ransu[i] == 15){
				String filename = "good4.jpg";
				jbt[i].setIcon(new ImageIcon(filename));
			}
		} //i end
	}//end

	public void init() {
		jlb.setFont(new Font("�ü�ü", Font.BOLD ,14 ));
		time_jlb.setFont(new Font("�ü�ü", Font.BOLD ,14 ));
		con = this.getContentPane();
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		con.setLayout(bl);
		con.add("North", time_jlb);
		con.add("Center", jp1);
		con.add("East", jp2);
		con.add("South", jlb);
		jp1.setLayout(gl1);
		ransu();
		for (int i = 0; i < 16; ++i) {
			jbt[i] = new JButton("�غ�!!"); // �ʱ�ȭ��
			jp1.add(jbt[i]); // ���ڹ�ư ����
			jbt[i].addActionListener(this); // ���ڹ�ư
		}
		
		jp2.setLayout(gl2); // 2,1
		jp2.add(start_bt); // ���۹�ư
		jp2.add(exit_bt); // �����ư
		start_bt.addActionListener(this); // ����
		exit_bt.addActionListener(this); // ����
	}//end

	public FruitGame(String title) {
		super(title);
		this.init();
		this.buttonOff(); // ��ư ��Ȱ��ȭ
		super.setSize(700, 500);
		Dimension screen = Toolkit.getDefaultToolkit().getScreenSize();
		int xpos = (int) (screen.getWidth() / 2 - this.getWidth() / 2);
		int ypos = (int) (screen.getHeight() / 2 - this.getHeight() / 2);
		super.setLocation(xpos, ypos);
		super.setResizable(false);
		super.setVisible(true);
	}//end

	public void select(int number) { // 1, 2, 3���� number���� ��ġ�ϸ�
		for(int i = 0; i < 16; i++){
			if(ransu[i] == 0) num1 = i;
			else if(ransu[i] == 1) num2 = i;
			else if(ransu[i] == 2) num3 = i;
		}
		if(num1 == number || num2 == number || num3 == number) {
			score++;
			jlb.setText("���� : " + score);
			if(score % score1 == 0){
				time += 7;
				score1 += 15;
			}
			ransu();
			mix();
		} else {
			time--;
			score--;
			jlb.setText("�������(����-1),(��������:  " + score + ")");
		}
	} //end

	@Override
	public void actionPerformed(ActionEvent e) { // ��ư Ŭ���� �߻��ϴ� �̺�Ʈ
		if (e.getSource() == start_bt) { // ���� "����"��ư�� ��������
			score = 0;
			time = 60;
			buttonOn(); // ���ڹ�ư Ȱ��ȭ
			Thread th = new Thread(this);
			th.start(); // run() �޼��� ȣ��
			ransu();// ������ ��� �� ransu�� ����.
			mix(); // ��ư�� �ٽ� ���´�.
		} else if (e.getSource() == exit_bt) {
			System.exit(0);
		}
		for (int i = 0; i < jbt.length; ++i) {
			if (e.getSource() == jbt[i]) { // ���� 0~15 ������ �� �� �ϳ��� �����ٸ�
				select(i);
			}
		}
	} //end

	public void buttonOn() { // ��ư Ȱ��ȭ
		for (int i = 0; i < jbt.length; ++i) {
			jbt[i].setEnabled(true);
		}
	}

	public void buttonOff() { // ��ư ��Ȱ��ȭ
		for (int i = 0; i < jbt.length; ++i) {
			jbt[i].setEnabled(false);
		}
	} //end

	public void run() { // �����ð� ���
		time_jlb.setText("�����ð�: " + time);
		while (time > 0) { 
			try {
				Thread.sleep(500); // 500���� �����غ���
			} catch (Exception e) {
			}
			time--;
			ransu();
			mix();
			time_jlb.setText("�����ð�:  " + time);
		}
		time_jlb.setText("Game Over");
		buttonOff();
	} //end
	
	public static void main(String[] args) {
		FruitGame fr = new FruitGame("���ӽ���");
	}
}//class END