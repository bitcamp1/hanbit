package net.hb.ref;
import java.io.*;
import java.net.*;
import java.util.*;  //���͸� ���
import java.awt.*;

public class Server implements Runnable{  //������ ���
	Vector vc=new Vector();
		TextArea ta ;
	Frame fr;
	
	public Server()
	{
			ta= new TextArea();
			fr = new Frame("����");
			fr.add(ta);
			fr.setSize(250,250);
			fr.setVisible(true);
	}
	public void run(){
		ServerSocket ss=null;
		try{
			ss=new ServerSocket(5555);  //�������� ��� �����ϴ� ��Ʈ��ȣ(����� ��Ʈ)
		}catch(Exception ex){System.out.println("����:"+ex); return;}
		while(true){
			try{
			
					ta.append("Ŭ���̾�Ʈ ���Ӵ����\n");
				Socket s=ss.accept();  //���� ������ ����. ������ ����(���� ������ Ŭ���̾�Ʈ�� ����)
				//Ŭ���̾�Ʈ���� ���ӿ䱸�� ������ �̸� ���ϰ�ü�� �Ҵ��ϰ�, �Ҵ�� ���ϰ�ü�� 
				//���� ������ ����ϰ� �Ǵ� ������ ���´�. �̸� ���� accept() ���
				ta.append("Ŭ���̾�Ʈ ����ó�� \n");
				
				Service cs=new Service(s);  //�Ʒ��� Ŭ���� ���(��ü ������ ���������� �ʼ�)
				cs.start();   //run() �޼ҵ� ȣ��
				cs.myname=cs.in.readLine();
				cs.messageAll("/c"+cs.myname);
				vc.add(cs); //�̹� ���ӵǾ� �ִ� �ٸ� Ŭ���̾�Ʈ���� ���� �˸��� ���� ���Ϳ� ���

				for(int i=0;i<vc.size();i++){
					Service cs1=(Service)vc.elementAt(i); //���� ��� ������
					cs.message("/c"+cs1.myname); //myname�� ������ Ŭ���̾�Ʈ�� �����ϱ�
					//���� ������ ���... ������ ������ �����;���.
				}
			}catch(Exception ex){ex.printStackTrace(); return;}
		}//while ��
	} //run�޼ҵ� ��
	
	class Service extends Thread{  //����Ŭ����...Run()�޼ҵ� ������
		String myname="guest";   //��ȭ��
		BufferedReader in;
		OutputStream out;
		Socket s;
		
		public Service(Socket s){
			try{
				this.s=s;  //����� Ŭ���̾�Ʈ�� ���� ���� ���� ����
				in=new BufferedReader(new InputStreamReader(s.getInputStream()));
				           //InputStreamReader�� in�� s�� �ٸ� ����.
				out=s.getOutputStream();
			}
			catch(Exception ex){ex.printStackTrace(); return;}
		}
		
		public void run(){
			while(true){
				try{
					String msg=in.readLine(); //��ȭ�� �Ǵ� �޼��� ����. ����ؼ� ������
						ta.append("���� : " + msg + "\n");
				
					if(msg==null) return;

					if(msg.charAt(0)=='/'){
						if(msg.charAt(1)=='n'){ // /n:�̸��ٲٱ�, /i:�ӼӸ�, /t:������
							if(msg.charAt(2)==' '){
								messageAll("/n"+myname+"-"+msg.substring(3).trim());
								//���� "-"�� ���б�ȣ(������), ���߿� client���� myname�� ���̸��� �и��ϱ� ����
								this.myname=msg.substring(3).trim();
							}
						}
						else if(msg.charAt(1)=='q'){
							try{
								for(int i=0 ; i<vc.size(); i++)
								{
									Service  svc = (Service)vc.get(i);
									if(myname.equals(svc.myname))
									{
										vc.remove(i);
										break;
									}
								}
								
								messageAll("/q"+myname);
								
							in.close();
							out.close();
								s.close();  //���� ����
								return;
							}catch(Exception ex){messageAll("/q"+myname);}
						}
						else if(msg.charAt(1)=='s'){
							String name=msg.substring(2, msg.indexOf('-')).trim();
							for(int i=0;i<vc.size();i++){
								Service cs3=(Service)vc.elementAt(i);
								if(name.equals(cs3.myname)){
									cs3.message(myname+">(�ӼӸ�)"+msg.substring(msg.indexOf('-')+1));
									break;
								}
							}
						}
					}
					else
						messageAll(myname+">"+msg);  //��ȭ���message
				}catch(Exception ex){ex.printStackTrace(); return;}
			}//while��
		}//run��
		
		public void messageAll(String msg){  
			//������ �ڷ� ������ Ŭ���̾�Ʈ���� ������
			for(int i=0;i<vc.size();i++){
				try{
					Service cs=(Service)vc.elementAt(i); //i��° ���Ͱ����� �Ʒ�ó�� �Ѹ���
					cs.message(msg);
				}catch(Exception ex){vc.removeElementAt(i--);} //���ܹ߻��� ����
			}			
		}//messageAll��

		public void message(String msg) throws Exception{
			//������ Ŭ���̾�Ʈ�� ������ �����ִ� �޼ҵ�
			out.write((msg+"\n").getBytes());
			ta.append("���� : " + msg + "\n");
		}
	}//ServiceŬ���� ��

	public static void main(String[] args){
		Server cs=new Server();
		new Thread(cs).start();  //Thread t=new Thread(cs); t.start()�� ����
	}
}
