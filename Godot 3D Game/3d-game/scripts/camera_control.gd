extends SpringArm3D

@export var mouse_sensitivity: float = 0.003
@export var jump_velocity = 4.5

@export var camera: Camera3D

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass

func _input(event: InputEvent) -> void:
	if event is InputEventMouseMotion and Input.mouse_mode == Input.MOUSE_MODE_CAPTURED: #camera follows mouse
		var mouse_delta = event.relative
		rotation.y -= mouse_delta.x * mouse_sensitivity
		rotation.x -= mouse_delta.y * mouse_sensitivity
		rotation.x = clamp(rotation.x, -PI/2, PI/4) #strict camera angle prevent over turning

	if event is InputEventKey:
		if event.keycode == KEY_TAB and event.pressed:
			if Input.mouse_mode == Input.MOUSE_MODE_CAPTURED:
				Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
			else:
				Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
