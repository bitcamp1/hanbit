package net.hb.ref;
import java.io.*;
import java.net.*;
import java.util.*; 
import java.awt.*;
import java.awt.event.*;
import java.awt.List;
//import java.applet.*;
public class Client extends Frame implements ActionListener,Runnable{
	Panel panel=new Panel();
	Panel center1=new Panel();
	Panel north=new Panel();
	Panel south=new Panel();
	Panel up1=new Panel();
	Panel up2=new Panel();
	Panel east=new Panel();
	Panel eastdown=new Panel();
	Panel east2=new Panel();
	Panel say=new Panel();
	TextArea txtarea=new TextArea();
	TextField txtsend=new TextField();
	Button btnok=new Button("확인");
	Button btnconn=new Button("접속");
	Button btnclose=new Button("나가기");
	Button btnrename= new Button("대화명변경");
	CheckboxGroup cg=new CheckboxGroup();
	Checkbox chksay1=new Checkbox("귓속말",cg,false);
	Checkbox chksay2=new Checkbox("귓속말 해제",cg,true);
	Label lbl1=new Label("대화명",Label.RIGHT);
	TextField txtname=new TextField();
	Label lbltitle=new Label("접속자 목록");
	Label lbl2=new Label("인원",Label.RIGHT);
	Label lblinwon=new Label("   ",Label.LEFT);
	List list=new List(20);
	
	BufferedReader in;
	OutputStream out;
	Socket soc;
	int count=0; //접속 인원수

	public Client(){
		setLayout(new BorderLayout());
		up1.setLayout(new BorderLayout(8,0));
		up1.add("West",lbl1);
		up1.add("Center",txtname);
		up1.add("North",new Label(" "));
		up1.add("South",new Label(" "));

		say.setLayout(new GridLayout(1,2));
		say.add(chksay1);
		say.add(chksay2);

		up2.setLayout(new BorderLayout(20,0));
		up2.add("Center",say);
		up2.add("West",btnconn);
		up2.add("East",new Label(" "));
		up2.add("North",new Label(" "));
		up2.add("South",new Label(" "));
		
		north.setLayout(new GridLayout(1,2));
		north.add(up1);
		north.add(up2);

		south.setLayout(new BorderLayout(8,0));
		south.add("Center", txtsend);
		south.add("East", btnok);
		south.add("North", new Label(" "));
		south.add("South", new Label(" "));

		center1.setLayout(new BorderLayout());
		center1.add("Center",txtarea);
		center1.add("North",north);
		center1.add("South",south);

		eastdown.setLayout(new GridLayout(2,3,10,0));
		eastdown.add(new Label(" "));
		eastdown.add(new Label(" "));
		eastdown.add(new Label(" "));
		eastdown.add(lbl2);
		lblinwon.setBackground(Color.blue);
		lblinwon.setForeground(Color.yellow);
		eastdown.add(lblinwon);
		//eastdown.add(btnrename);
		eastdown.add(btnclose);

		east.setLayout(new BorderLayout());
		for(int i=1;i<=20;i++) list.add("");
		east.add("Center",list);
		east.add("South",eastdown);
		east.add("North",lbltitle);

		east2.setLayout(new BorderLayout());
		east2.add("West",new Label(" "));
		east2.add("Center",east);
		east2.add("North",new Label(" "));
		east2.add("South",new Label(" "));

		panel.setLayout(new BorderLayout());
		panel.add("Center",center1);
		panel.add("East",east2);

		add("Center",panel);
		add("East",new Label(" "));
		add("West",new Label(" "));
		
		setTitle("채팅 프로그램");
		setBounds(100,100,450,250);
		setVisible(true);
		txtname.requestFocus();

		addWindowListener(new WindowAdapter(){
			public void windowClosing(WindowEvent e){
				System.exit(0);
			}
		});

		txtname.addActionListener(this);
		txtsend.addActionListener(this);
		btnok.addActionListener(this);
		btnconn.addActionListener(this);
		btnclose.addActionListener(this);
	}

	public void actionPerformed(ActionEvent e){
		if((e.getSource()==txtname) || (e.getSource()==btnconn))
			connProcess();
		else if((e.getSource()==txtsend) || (e.getSource()==btnok))
			sendProcess();
	//	else if( (e.getSource()==btnok))
	//		System.exit(0);
		else if( (e.getSource()==btnclose))
		 endProcess();
	}

	public void endProcess()
	{
		try{
			
			out.write(("/q" + txtname.getText()+"\n").getBytes());
			System.out.println("보냄 : /q" +txtname.getText());
			in.close();
			out.close();
			soc.close();
			
		}catch(Exception ex ) {
		 System.out.println("보냄 기 오류" + ex.getMessage());
		}
	 
	  System.exit(0);
			
	}

	public void connProcess()
	{
		try{
	//		soc=new Socket("127.0.0.1",5555);
			soc=new Socket("203.236.209.121",5555);
			in=new BufferedReader(new InputStreamReader(soc.getInputStream()));
			//소켓 객체가 생성되면 입출력 스트립과 연결
			out=soc.getOutputStream();

			//최초 접속 시 클라이언트에서 서버로 이동
			//동시다발적으로 클라이언트가 접속하면 각각을 구분하기 위해
			out.write((txtname.getText()+"\n").getBytes()); //write�� ����Ʈ ó���ǹǷ�
			System.out.println("���� " + txtname.getText());
			
		//	txtname.setText("");

			new Thread(this).start(); //���ӵǸ� ������ ���� �ٸ� Ŭ���̾�Ʈ�� �޼��� ȹ�氡��
		}catch(Exception ex){txtarea.append(ex.getMessage());}
	}

	public void sendProcess()
	{
		try{
			String txt = txtsend.getText().trim();
			String  str = txt.substring(1,2);
					
			if(str.equals("q"))
				endProcess();
				
			if(chksay2.getState()==true){
				  out.write((txtsend.getText()+"\n").getBytes());
					System.out.println("����  : " + txtsend.getText());
				}	
			else{
				try{
					String name=list.getSelectedItem();
					out.write(("/s"+name+"-"+txtsend.getText()+"\n").getBytes());
						System.out.println("����  : /s"+name+"-"+txtsend.getText());
					txtarea.append(name+"�Բ� �ͼӸ��� ���޵Ǿ����ϴ�.\n");
				}catch(Exception ex){txtarea.append(ex.getMessage());}
			}
			txtsend.setText(null);
			txtsend.requestFocus();
		}catch(Exception ex){txtarea.append(ex.getMessage());}
	}

	public void run(){
		while(true){
			try{
				String msg=in.readLine();
				System.out.println("���� : " + msg);
				
				if(msg==null) return;  //�ƹ� �͵� ���� ���� ���� ���...

					if(msg.charAt(0)=='/'){
						if(msg.charAt(1)=='c'){  //���� ����
								list.replaceItem(msg.substring(2),count);
								count++;  //�����ο� ǥ��
								lblinwon.setText(String.valueOf(count));

								//txtarea�� �Ѹ� ����
								txtarea.append("***"+msg.substring(2)+"���� �����Ͽ����ϴ�***\n");
								txtname.setEnabled(false);
								btnconn.setEnabled(false);
						}	
						else if(msg.charAt(1)=='q'){
						
								String  str = msg.substring(2);
									txtarea.append("***"+msg.substring(2)+"���� �����Ͽ����ϴ�***\n");
									
									for(int i=0;i<list.getItemCount();i++){
									  if(str.equals(list.getItem(i)))
										{
											list.remove(i);
											count--;
											lblinwon.setText(String.valueOf(count));
											break;
										}
									}
									return;
						}
						else if(msg.charAt(1)=='n'){
							String oldname=msg.substring(2, msg.indexOf('-'));
							String newname=msg.substring(msg.indexOf('-')+1);
							txtarea.append("*"+oldname+"���� �̸��� "+newname+"���� ����Ǿ����ϴ�.*\n");

							for(int j=0;j<count;j++){
								if(oldname.equals(list.getItem(j))){
									list.replaceItem(newname, j);
									break;
								}
							}
						}
					}
					else
						txtarea.append(msg+"\n");  
			}catch(Exception ex){txtarea.append(ex.getMessage());}
		}//while��
	}

	public static void main(String[] args){
		new Client();
	}
}
