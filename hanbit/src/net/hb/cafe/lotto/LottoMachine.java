package net.hb.cafe.lotto;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.List;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

/*java lotto 이미지 출력*/

public class LottoMachine extends JFrame implements ActionListener{
	private static final long serialVersionUID = 1L;
	Lotto lot ;
	List<JButton>btns;
	JButton btn_cal, btn_tmp;
	JPanel pan_nth, pan_sth;
	ImageIcon icon;
	private final String iconPath = "src/images/";
	
	
	public LottoMachine(){
		init();
	}
	@Override
	public void actionPerformed(ActionEvent e) {
		if(btns.size()==0){
			initBtns();
		}
		lot.setArr();
		showLotto();
	}
	public ImageIcon getIcon(int num) {
		String imgPath = iconPath + Integer.toString(num)+".gif";
		return new ImageIcon(imgPath);
	}
	private void showLotto() {
		int[]arr = lot.getArr();
		for(int i=0;i<arr.length;i++){
			btns.get(i).setIcon(getIcon(arr[i]));;
		}
		
	}
	private void initBtns() {
		btn_tmp = null;
		for(int i=0;i<6;i++){
			btn_tmp = new JButton();
			btns.add(btn_tmp);
			pan_sth.add(btn_tmp);
		}
		
	}
	public void init() {
		lot = new Lotto();
		btns = new ArrayList<JButton>();
		pan_nth = new JPanel();
		pan_sth = new JPanel();
		btn_cal = new JButton("추첨");
		btn_cal.addActionListener(this);
		pan_nth.add(btn_cal);
		add(pan_nth,BorderLayout.NORTH);
		add(pan_sth,BorderLayout.SOUTH);
		setBounds(300,400,1200,300);
		setResizable(false);
		setVisible(true);
	}

}
