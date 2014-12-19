package net.hb.ref;

import  java.io.*; //dataó�� 
import  java.net.*;//����

public class UserServer {
	public static void main(String[ ] args){
		try{
			//����1- �������ϻ����� - client������ �����
			ServerSocket   server = new  ServerSocket(1111); 
			System.out.println("client���� �����...");
			
			//����2-�Ϲݼ������� ���������� ������ ����
			Socket  socket = server.accept();
			System.out.println(  "client���� �����");
			
			//����3-������ client�ּ�ǥ�� 
			InetAddress  add = socket.getInetAddress();
			System.out.println( add +" client������");
			
			//����4 - �������� ������ streamó��
				InputStream  is   = socket.getInputStream();
				OutputStream  os = socket.getOutputStream();
			
			//����5 - while������ �������� ����ȵ���Ÿ �ְ�ޱ� 
			InputStreamReader  isr = new  InputStreamReader(  is ) ;
			OutputStreamWriter   osw = new  OutputStreamWriter( os ) ; 
			BufferedReader    br = new BufferedReader(  isr ) ;
			PrintWriter   pw = new PrintWriter(   osw ) ;
			while(true){
				String  data = br.readLine();
				if(data=="quit" || data.equals("Quit") || data=="q" || data.equals("QUIT")) {
					System.out.println("����Serverä�� ����") ; 
					break ; 
				} 
				System.out.println("client����: " + data);
			}//while END
			br.close(); pw.close(); socket.close();  isr.close(); osw.close(); 
		}catch(Exception ex) {  }
	} //main end
} //class END






































