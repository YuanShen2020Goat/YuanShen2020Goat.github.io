extends CharacterBody2D

var move_speed: float = 100
@export var animator : AnimatedSprite2D


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	velocity = 	Input.get_vector("left", "right", "up", "down") * move_speed
	if velocity == Vector2.ZERO:
		animator.play("idle")
	else:
		animator.play("run")
	move_and_slide()
