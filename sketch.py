from p5 import *

def setup():
	global angle,radius,curve,numArms,x,sides,deg
	global changeRadius
	colorMode(HSB)
	sides = 10
	deg = 360/sides
	x = 0
	angle =0
	radius =0
	curve = 0.1 
	numArms = 1
	changeRadius = 0.5
	createCanvas(windowWidth,windowHeight)
	background("black")
	
def draw():
	# background("black")
	global angle,radius,curve,numArms,x,sides,deg,changeRadius
	angle+= (360/numArms) + curve
	radius= radius + changeRadius
	# curve+=0.00000001
	if x >= 360:
		x = 0
	else:  
		x+=0.75
	translate(width/2,height/2)
	rotate(angle)
	noStroke()
	# drawTickAxes()
	fill(x,73,96)
	circle(radius,0,5)
	def newShape(x,y, w, h):
		rectMode(CENTER)
		push()  
		rect(x,y,w,h)
		translate(x,y)
		rotate(deg)
		rect(x,y,w,h)
		pop()
		# square(x,y, w)
	# newShape(radius, 0, 10, 20)
	# triangle(radius, 0, 0.7*radius, 0.2*radius, 0.7*radius, -0.2*radius)
	# circle(radius,0,10)
	#circle(-radius,0,10)
	if radius >= width/2:
		changeRadius = -0.5
		# numArms+=1


	if radius == 0:
		background('black')
		changeRadius = 0.5
		numArms = random(8)
		


	
	 