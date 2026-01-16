extends CharacterBody3D
class_name Player

static var instance: Player

@export var speed = 5.0
@export var jump_velocity = 4.5

@export var camera: Camera3D
@export var model: Node3D

var spawn_position
var target_angle: float = 180 #make character not facing backward at beginning

# Called when the node enters the scene tree for the first time.

# Called when the node enters the scene tree for the first time.
func _ready() -> void: #removes collectibles when touched
	if instance == null:
		instance = self
	else:
		queue_free() # Replace with function body
	
	spawn_position = position

func _process(delta: float) -> void: #lets character's direction follow the direction of movement when moving
	var camera_angle = camera.global_rotation.y
	var input_dir := Input.get_vector("left", "right", "forward", "backward")
	var input_angle = atan2(input_dir.x, input_dir.y)
	if input_dir != Vector2.ZERO and not GameManager.instance.is_game_over: #only when game is not finished, then follow WASD directions
		target_angle = camera_angle + input_angle
	model.global_rotation.y = lerp_angle(model.global_rotation.y, target_angle, delta * 15) #speed of rotatingwhen changing direction


func _physics_process(delta: float) -> void:
	# Add the gravity.
	if not is_on_floor() and not GameManager.instance.is_game_over: #only able to jump when game is not finished
		velocity += get_gravity() * delta

	# Handle jump.
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = jump_velocity

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var input_dir := Input.get_vector("left", "right", "forward", "backward") #player object movements and speed
	var direction := (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()
	direction = direction.rotated(Vector3.UP, camera.global_rotation.y)
	if direction and not GameManager.instance.is_game_over: #only able to move when game is not finished
		velocity.x = direction.x * speed
		velocity.z = direction.z * speed
	else:
		velocity.x = move_toward(velocity.x, 0, speed)
		velocity.z = move_toward(velocity.z, 0, speed)

	move_and_slide()
