package net.hb.model;

import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;

import javax.swing.JFrame;

import net.hb.service.NoteService;

public class JNoteEx extends JFrame implements NoteService{

	private static final long serialVersionUID = 1L;

	@Override
	public void setTextArea() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void setTextFields() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void setLabels() {
		// TODO Auto-generated method stub
		
	}


	@Override
	public void setButtons() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void setPanes() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void setMenus() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void setLayout() {
		addWindowListener(new WindowAdapter() {
			@Override
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
			@Override
			public void windowOpened(WindowEvent e) {
				
			}
		});
		
	}
	

	@Override
	public void fileOpen() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void fileSave() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void exit() {
		// TODO Auto-generated method stub
		
	}

	

	

}
