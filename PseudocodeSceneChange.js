

next
	sc++
	sceneChange(sc)
	isNextScene = true;
prev
	sc--
	sceneChange(sc)
	isNextScene = true;

sceneChangeNext(sc):
	switch(sc)
	1: 
		sc 1 set pos -- once
		sc 2 set pos -- once
sceneChangePrev(sc)
	swith(sc)
	1:
		sc 1 set pos -- once
		sc 2 set pos -- once
draw()
	switch (scUp):
	1: sc 1 update; 
	2: sc 2 update
	nextSceneCheck(sc);
	prevSceneCheck(sc);		
		
nextSceneCheck(sc)
	if(isNextScene): 
		if(!isAnimate)
			switch sc:
		    1: sc1hide();
		    2: sc2hide();
			scUp++
			isNextScene = false;

prevSceneCheck(sc)
	if(isPrevScene): 
		if(!isAnimate)
			switch sc:
		    1: sc1hide();
		    2: sc2hide();
			scUp--
			isNextScene = false;