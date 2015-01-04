import javax.swing.JPanel;
import javax.swing.JList;
import javax.swing.JScrollBar;


public class jlistDemo extends JPanel {
	private final JList list_1 = new JList();

	/**
	 * Create the panel.
	 */
	public jlistDemo() {
		
		JScrollBar scrollBar = new JScrollBar();
		add(scrollBar);
		
		JList list_2 = new JList();
		add(list_2);
		add(list_1);
		
		JList list = new JList();
		add(list);

	}

}
