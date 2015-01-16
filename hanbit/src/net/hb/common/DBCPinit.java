package net.hb.common;

import java.util.StringTokenizer;

import javax.servlet.ServletConfig;
import javax.servlet.http.HttpServlet;

public class DBCPinit extends HttpServlet{
	private static final long serialVersionUID = 1L;

	public void init(ServletConfig config) {
		try {
			String s0 = config.getInitParameter("jdbcdriver");
			StringTokenizer tok = new StringTokenizer(s0, ",");

			while (tok.hasMoreTokens()) {
				String s1 = tok.nextToken();

				Class.forName(s1);
			}
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
