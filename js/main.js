
	var m_panel, m_ctrl, m_type;
	var moving = 0, 
			m_start_x = 0, m_start_y = 0,
			m_to_x = 0, m_to_y = 0;
	function onmousedown(e,panel,ctrl,type){
		var e = e || window.event;
		m_start_x = e.pageX - ctrl.offsetLeft;
		m_start_y = e.pageY - ctrl.offsetTop;
		m_panel = panel;
		m_ctrl = ctrl;
		m_type = type;
		moving = setInterval(on_move, 10)
	}
	function on_move(){
		if(moving){
			var to_x = m_to_x - m_start_x;
			var to_y = m_to_y - m_start_y;
			switch(m_type){
				case 'right':
				 m_ctrl.style.left = to_x + 'px';
				break;
				case 'bottom':
					m_ctrl.style.top = to_y + 'px';
				break;
				case 'rightBottom':
					m_ctrl.style.left = to_x + 'px';
					m_ctrl.style.top = to_y + 'px';
				break;
			}	
		}
	}
	document.onmousemove = function(e){
		var e = e || window.event;
		m_to_x = e.pageX;
		m_to_y = e.pageY;
	}
	document.onmouseup = function(){
		clearInterval(moving)
		moving = 0;
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

		right.addEventListener('mousedown',	function(e){
			onmousedown(e,panel,right,'right')
		})
		bottom.addEventListener('mousedown',	function(e){
			onmousedown(e,panel,bottom,'bottom')
		})
		rightBottom.addEventListener('mousedown',	function(e){
			onmousedown(e,panel,rightBottom,'rightBottom')
		})
	}
 	
