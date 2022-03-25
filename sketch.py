from p5 import *





def setup():
  createCanvas(windowWidth,windowHeight)
  background("red")
  drawTickAxes()





def draw():

  global x
  global y
  #background("black")

  #drawTickAxes()
  #fill("black")
  #triangle(100,100,200,300,300,100)

  #noStroke()

  #random(0,255)
  fill(random(0,0),random(0,0),random(0,255))
  circle(mouseX,mouseY,80)


  #x = x + 5
  #y = y - 3






