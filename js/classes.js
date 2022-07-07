class Sprite {
    constructor({position, imageSrc, scale = 1, frameMax = 1}){
        this.position = position
        this.width = 50
        this.height = 150
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.frameMax = frameMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 1
    }

    draw(){
        c.drawImage(
          this.image,
          this.position.x,
          this.position.y,
          this.image.width * this.scale,
          this.image.height * this.scale
        );
    }

    update(){
        this.draw()
    }
}

class Fighter extends Sprite{
    constructor({ position, velocity, color = 'red', offset, imageSrc, scale = 1, frameMax = 1}){
        super({
            position,
            imageSrc,
            scale,
            frameMax
        })

        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 150
        this.lastKey
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset,
            width: 100,
            height: 50,
        }
        this.color = color
        this.isAttacking
        this.health = 100
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 1
    }

    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

        //attack box
        if(this.isAttacking){
            c.fillStyle = 'green'
            c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        }
    }

    update(){
        this.draw()
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y >= canvas.height - 102){
            this.velocity.y = 0
        } else{
            this.velocity.y += gravity
        }
    }

    attack(){
        this.isAttacking = true
        setTimeout(() => {
            this.isAttacking = false
        }, 100);
    }
}