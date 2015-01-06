package net.hb.lotto;

import java.awt.Canvas;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.Toolkit;

public class Ex6 extends Canvas {
	// 이미지를 캔버스에 넣기
	Image image0, image1, image2, image3, image4, image5;
	Toolkit toolkit;
	// 로또 당첨번호를 저장할 배열
	int[] score = new int[6];
	String[] image = new String[6];
	
	// 생성자
	public Ex6() {
		// 배열 초기화
		for (int i = 0; i < score.length; i++) { 
			score[i] = 0;
		}
		

		// 로또 당첨번호 저장
		for (int i = 0; i < score.length; i++) {

			// 1~45 까지의 번호 중 임의의 수 생성
			int randomNum = (int) (Math.random() * 45 + 1);
			// 이미 등록된 번호인지의 여부
			boolean exist = false;

			// 등록된 번호 확인
			for (int j = 0; j < score.length; j++) {
				// 임의의 수가 이미 등록된 번호인지 확인한다.
				if (randomNum == score[j]) {
					exist = true;
					break; // 등록된 번호이면 번호확인 종료
				}
			}

			if (exist) {
				// 등록된 번호이면 다시 등록
				i--;
				continue;
			} else {
				// 등록된 번호가 아니면 임의의 수 등록
				score[i] = randomNum;
			}

		}
		//이미지 배열
		toolkit = Toolkit.getDefaultToolkit();
		//image0 = toolkit.getImage(get); 		
		
	}

	public String[] getImage() {
		for (int i = 0; i < score.length; i++) {
			image[i] = "src/images/"+ score[i]+".gif";
			//System.out.println(image[i]);
		}
		return image;
	}

	public void setImage(String[] image) {
		this.image = image;
	}

	@Override
	public void paint(Graphics g) {
		g.drawImage(image0, 10, 10, this);
		g.drawImage(image1, 130, 10, this);
		g.drawImage(image2, 260, 10, this);
		g.drawImage(image3, 390, 10, this);
		g.drawImage(image4, 520, 10, this);
		g.drawImage(image5, 650, 10, this);
		
	}
}
