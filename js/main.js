
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
			var min_left = m_panel.offsetLeft+50;
			var min_top = m_panel.offsetTop+50;

			var to_x = m_to_x - m_start_x;
			var to_y = m_to_y - m_start_y;
			to_x = Math.max(to_x, min_left);
			to_y = Math.max(to_y, min_top);
			console.log(to_x, to_y)
			switch(m_type){
				case 'right':
				 m_ctrl.style.left = to_x+'px';
				 m_panel.style.width = to_x+10+'px'
				break;
				case 'bottom':
					m_ctrl.style.top = to_y + 'px';
					m_panel.style.height = to_y+10+'px'
				break;
				case 'rightBottom':
					m_ctrl.style.left = to_x + 'px';
					m_ctrl.style.top = to_y + 'px';
					m_panel.style.width = to_x+10+'px';
					m_panel.style.height = to_y+10+'px'
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
		var clas = document.getElementsByClassName('ui-resizable-ctrl')
		for(var i = 0;i<clas.length;i++){
			clas[i].style.left = '';
			clas[i].style.top = '';
		}
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
	// 标题栏可拖拽
	function $(ele){
		return document.querySelectorAll(ele)
	}
	var dragTitle = $('.panel-title')[0],
	    dragPanel = $('#ui-resizable')[0];
	var mouseOffsetX = 0,
	    mouseOffsetY = 0;
	var isDraging = false;
	dragTitle.addEventListener('mousedown', function(e){
			var e = e || window.event;
			mouseOffsetX = e.pageX - dragPanel.offsetLeft;
			mouseOffsetY = e.pageY - dragPanel.offsetTop;
			isDraging = true;
	})
	dragTitle.addEventListener('mousemove',function(e){
		var e = e || window.event;
		var mouseX = e.clientX,
		    mouseY = e.clientY,
				moveX = 0,
		 		moveY = 0;
		if(isDraging === true){
			moveX = mouseX - mouseOffsetX;
			moveY = mouseY - mouseOffsetY;
			dragPanel.style.left = moveX + 'px';
			dragPanel.style.top = moveY + 'px';
		}
	})
	dragPanel.addEventListener('mouseup',function(){
		isDraging = false
	})
 	
