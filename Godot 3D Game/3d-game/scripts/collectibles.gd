extends Area3D

@export var rotation_speed: float = 0.5
@export var floating_speed: float = 0.005 #speed the object floats up and down
@export var floating_magnitude: float = 0.05 #lowest and highest that the object can move
var original_y : float

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	original_y = position.y


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void: #let collectibles rotate itself
	rotation.y += rotation_speed * delta
	position.y = original_y + sin(Time.get_ticks_msec() * floating_speed) * floating_magnitude
