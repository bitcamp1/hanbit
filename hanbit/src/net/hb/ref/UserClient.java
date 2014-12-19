package net.hb.ref;

import  java.io.*; //dataó�� 
import  java.net.*;//����
public class UserClient {
	public static void main(String[ ] args){
		try{
			//����1- �������ϻ����� - client������ �����	
			//����2-�Ϲݼ������� ���������� ������ ����
			//����3-������ client�ּ�ǥ�� 
			
			//����A ���������� ���� ip, port��ȣ�ʿ�
			Socket  socket  = new  Socket("127.0.0.1", 1111);
			//����B- �������� ������ streamó��
				InputStream  is   = socket.getInputStream();
				OutputStream  os = socket.getOutputStream();
			
			//����5 - while������ �������� ����ȵ���Ÿ �ְ�ޱ� 
			BufferedReader    br = new BufferedReader( new InputStreamReader( is)) ;
			PrintWriter   pw = new PrintWriter(   new OutputStreamWriter( os )) ;
			//client�� Ű���忡�� ����Ÿ �Է�
			BufferedReader  key = new BufferedReader( new InputStreamReader(System.in)) ;
			while(true){
				System.out.print("�޼����Է�: " );
				String  data = key.readLine(); //Ű���忡�� �Է� 
				if(data=="quit" || data.equals("Quit") || data=="q" || data.equals("QUIT")) {
					System.out.println("����Clientä�� ����") ; 
					break ; 
				} 
				pw.println(data); pw.flush() ; 
			}//while END
			br.close(); pw.close(); socket.close();  key.close();  
		}catch(Exception ex) {  }
	} //main end
} // class END










