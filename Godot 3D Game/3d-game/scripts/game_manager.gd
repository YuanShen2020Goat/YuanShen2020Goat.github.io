extends Node3D
class_name GameManager

static var instance: GameManager

@export var collected_items: Dictionary[String, int] = {'DIAMOND': 0, 'COIN': 0, 'CHERRY': 0,} #remembers counted collected in checker

# Called when the node enters the scene tree for the first time.
func _ready() -> void: #removes collectibles when touched
	if instance == null:
		instance = self
	else:
		queue_free() # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass


func respawn_player(body: Node3D) -> void: #detect if player touches the world boundary collsion shape to reload the game
	if body is CharacterBody3D:
		get_tree().reload_current_scene()

func collect_item(item_type): #when collected a collectible, +1 in count
	collected_items[item_type] += 1
