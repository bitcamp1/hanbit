package net.hb.day18;

import java.awt.*;
import java.awt.event.*;

import javax.swing.*;

class FruitGame extends JFrame implements ActionListener, Runnable {
	private int num1, num2, num3;
	private int time = 20;
	private Container con = null;
	private JButton jbt[] = new JButton[16]; // 버튼16개
	private int ransu[] = new int[16]; // 이미지를 출력할 번째 수
	private JLabel jlb = new JLabel("메세지: ^ 사과를 선택^ ");
	private JLabel time_jlb = new JLabel("시작버튼클릭 게임시작");
	private BorderLayout bl = new BorderLayout();
	private JPanel jp1 = new JPanel();
	private GridLayout gl1 = new GridLayout(4, 4);
	private JButton start_bt = new JButton("시작");
	private JButton exit_bt = new JButton("종료");
	private JPanel jp2 = new JPanel();
	private GridLayout gl2 = new GridLayout(2, 1);
	private int score = 0; // 점수
	private int score1 = 15; // 점수 x

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
		jlb.setFont(new Font("궁서체", Font.BOLD ,14 ));
		time_jlb.setFont(new Font("궁서체", Font.BOLD ,14 ));
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
			jbt[i] = new JButton("준비!!"); // 초기화면
			jp1.add(jbt[i]); // 숫자버튼 삽입
			jbt[i].addActionListener(this); // 숫자버튼
		}
		
		jp2.setLayout(gl2); // 2,1
		jp2.add(start_bt); // 시작버튼
		jp2.add(exit_bt); // 종료버튼
		start_bt.addActionListener(this); // 시작
		exit_bt.addActionListener(this); // 종료
	}//end

	public FruitGame(String title) {
		super(title);
		this.init();
		this.buttonOff(); // 버튼 비활성화
		super.setSize(700, 500);
		Dimension screen = Toolkit.getDefaultToolkit().getScreenSize();
		int xpos = (int) (screen.getWidth() / 2 - this.getWidth() / 2);
		int ypos = (int) (screen.getHeight() / 2 - this.getHeight() / 2);
		super.setLocation(xpos, ypos);
		super.setResizable(false);
		super.setVisible(true);
	}//end

	public void select(int number) { // 1, 2, 3번과 number값이 일치하면
		for(int i = 0; i < 16; i++){
			if(ransu[i] == 0) num1 = i;
			else if(ransu[i] == 1) num2 = i;
			else if(ransu[i] == 2) num3 = i;
		}
		if(num1 == number || num2 == number || num3 == number) {
			score++;
			jlb.setText("점수 : " + score);
			if(score % score1 == 0){
				time += 7;
				score1 += 15;
			}
			ransu();
			mix();
		} else {
			time--;
			score--;
			jlb.setText("사과선택(점수-1),(현재점수:  " + score + ")");
		}
	} //end

	@Override
	public void actionPerformed(ActionEvent e) { // 버튼 클릭시 발생하는 이벤트
		if (e.getSource() == start_bt) { // 만약 "시작"버튼을 눌렀으면
			score = 0;
			time = 60;
			buttonOn(); // 숫자버튼 활성화
			Thread th = new Thread(this);
			th.start(); // run() 메서드 호출
			ransu();// 랜덤값 계산 후 ransu에 저장.
			mix(); // 버튼을 다시 섞는다.
		} else if (e.getSource() == exit_bt) {
			System.exit(0);
		}
		for (int i = 0; i < jbt.length; ++i) {
			if (e.getSource() == jbt[i]) { // 만약 0~15 사이의 값 중 하나를 눌렀다면
				select(i);
			}
		}
	} //end

	public void buttonOn() { // 버튼 활성화
		for (int i = 0; i < jbt.length; ++i) {
			jbt[i].setEnabled(true);
		}
	}

	public void buttonOff() { // 버튼 비활성화
		for (int i = 0; i < jbt.length; ++i) {
			jbt[i].setEnabled(false);
		}
	} //end

	public void run() { // 남은시간 계산
		time_jlb.setText("남은시간: " + time);
		while (time > 0) { 
			try {
				Thread.sleep(500); // 500으로 변경해보삼
			} catch (Exception e) {
			}
			time--;
			ransu();
			mix();
			time_jlb.setText("남은시간:  " + time);
		}
		time_jlb.setText("Game Over");
		buttonOff();
	} //end
	
	public static void main(String[] args) {
		FruitGame fr = new FruitGame("게임시작");
	}
}//class END