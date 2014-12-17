package net.hb.controller;

import java.awt.BorderLayout;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.HeadlessException;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;
import java.text.NumberFormat;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class JFrameCalc extends JFrame{

	/**
	 * 
	http://djsdj222.blog.me/220170288062
	 */
	private static final long serialVersionUID = 1L;
	JButton plus,minus,multi,div,equal,clear;
	JPanel panel;
	JLabel label;
	JButton btnNo[] = new JButton[10];
	String inputVal; 
	char opcode;
	int result;
	float divResult;
	
	
	public JFrameCalc() throws HeadlessException {
		super("계산기");
		setBounds(200,200,300,300);
		setResizable(false);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		label = new JLabel("0",JLabel.RIGHT);
		label.setFont(new Font("궁서",Font.BOLD,20));
		add(label,BorderLayout.NORTH);
		panel = new JPanel(new GridLayout(4,4,1,1)); 
		add(panel, BorderLayout.CENTER);
		plus = new JButton("+");
		minus = new JButton("-");
		multi = new JButton("*");
		div = new JButton("/");
		equal = new JButton("=");
		clear = new JButton("C");
		
		int i;
		
		for(i=0;i<btnNo.length;i++){
			btnNo[i] = new JButton(Integer.toString(i));
		}
		
		panel.add(btnNo[7]);panel.add(btnNo[8]);panel.add(btnNo[9]);panel.add(plus);
		panel.add(btnNo[4]);panel.add(btnNo[5]);panel.add(btnNo[6]);panel.add(minus);
		panel.add(btnNo[1]);panel.add(btnNo[2]);panel.add(btnNo[3]);panel.add(multi);
		panel.add(btnNo[0]);panel.add(equal);panel.add(clear);panel.add(div);
		
		jFrameCaleNumHandler nh = new jFrameCaleNumHandler();
		for(i=0;i<btnNo.length;i++){
			btnNo[i].addActionListener(nh);
		}
		jFrameCalcOpHandler oh = new jFrameCalcOpHandler();
		plus.addActionListener(oh);
		minus.addActionListener(oh);
		multi.addActionListener(oh);
		div.addActionListener(oh);
		equal.addActionListener(oh);
		clear.addActionListener(oh);
		setVisible(true);
	}
	class jFrameCaleNumHandler implements ActionListener{
		
		@Override
		public void actionPerformed(ActionEvent e) {
			String clickedBtnLabel = e.getActionCommand(); // clicked button label
			if(inputVal == null){
				if(clickedBtnLabel.equals("0")){
					return;
				}else{
					inputVal = new String();
				}
				if(clickedBtnLabel.length()>=9){
					return;
				}
				inputVal += clickedBtnLabel;
				label.setText(inputVal);
			}
			
		}

	}
	class jFrameCalcOpHandler implements ActionListener{
		
		
		@Override
		public void actionPerformed(ActionEvent e) {
			JButton src = (JButton) e.getSource();
			int value;
			
			if(src==clear){  // C 를 클릭하면 초기화
				label.setText("0");
				inputVal = null;
				opcode = 0;
				result = 0;
				return;
				
			}
			if(inputVal != null){
				value = Integer.parseInt(inputVal);
				
				switch(opcode){
				case '+' : result += value;break;
				case '-' : result -= value;break;
				case '*' : result *= value;break;
				case '/' : result /= value;break;
				default : result = value;break;
				}
			
				label.setText(Integer.toString(result));
			}
			inputVal = null;
			opcode = src.getText().charAt(0);
					
		}

	}
	public static void main(String[] args) {
		new JFrameCalc();
	}

}
