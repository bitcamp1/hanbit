package net.hb.service;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public abstract class JNote extends JFrame{
	private JTextArea ta;
	private JMenuBar menubar;
	private JTextField tf;
	private JPanel pan_center,pan_south;
	private JMenu menu_file,menu_edit,menu_form,menu_help,menu_view;
	private JButton btn_send, btn_exit;
	private JLabel lbl_info;
	private ImageIcon icon_a, icon_b;
	private JMenuItem m_copy, m_paste, m_cut, m_version, 
						m_exit, m_open, m_save, m_new, m_file, m_edit, m_help;
}
