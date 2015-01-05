package net.hb.lecture;

public class MatchGame2 {
	int player, com, count;
	boolean flag;
	
	public boolean isFlag() {
		return flag;
	}
	
	public int game(int  player, int ccom){
		int result = 0;
		player = getPlayer();
		com = getCom();
		
		if(player==com){
		
			result=0;
		}else if(player > com){
			
			result=1;
		}else {
			result=-1;
		}
		return result;
	}
	
	public int getPlayer() {
		return player;
	}

	public void setPlayer(int player) {
		this.player = player;
		
	}

	public int getCom() {
		return com;
	}

	public void setCom() {
		this.com = (int) ((Math.random()*100)+1);
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}
	
}
