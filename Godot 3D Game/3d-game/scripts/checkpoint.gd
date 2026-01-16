extends Area3D



var is_activated: bool = false #remember if the checkpoint is already activated or not

@export var is_final_checkpoint: bool = false

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass


func _on_body_entered(body: Node3D) -> void: #detect if player entered checkpoint and play the animation
	if body is CharacterBody3D and not is_activated: #if the animation is played already, don't replay
		$AnimationPlayer.play('activate')
		is_activated = true
		GameManager.instance.activated_checkpoints.append(self)
		
		if is_final_checkpoint: #if the checkpoint is selected as final checkpoint
								#when player activates the checkpoint, display WinLabel UI
			GameManager.instance.win_game()
