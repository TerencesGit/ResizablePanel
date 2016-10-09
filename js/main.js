
	var m_panel, m_ctrl, m_type;

	var moving = 0, 
			m_start_x = 0, m_start_y = 0,
			m_to_x = 0, m_to_y = 0;
	function onmousedown(e,panel,ctrl,type){

	}
	function Resizable(panel_id){
		var panel = document.getElementById(panel_id);
		var right = document.createElement('div');
		var bottom = document.createElement('div');
		var rightBottom = document.createElement('div');
		right.className = 'ui-resizable-right ui-resizable-ctrl';
		bottom.className = 'ui-resizable-bottom ui-resizable-ctrl';
		rightBottom.className = 'ui-resizable-rightBottom ui-resizable-ctrl';
		panel.appendChild(right)
		panel.appendChild(bottom)
		panel.appendChild(rightBottom)
	}
 	
