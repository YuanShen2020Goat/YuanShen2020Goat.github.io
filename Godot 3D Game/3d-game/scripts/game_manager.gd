extends Node3D
class_name GameManager

static var instance: GameManager

@export var collected_items: Dictionary[String, int] = {'DIAMOND': 0, 'COIN': 0, 'CHERRY': 0,} #remembers counted collected in checker

@export var item_labels: Dictionary[String, Label] #create a spot to have collectibles collected identified

var activated_checkpoints: Array = [] #remember what checkpoints player activated

@export var win_label: Label
var is_game_over: bool = false #remember if player finish the game

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(_delta: float) -> void:
	pass
	
# Called when the node enters the scene tree for the first time.
func _ready() -> void: #removes collectibles when touched
	if instance == null:
		instance = self
	else:
		queue_free() # Replace with function body
	
	win_label.visible = false


func respawn_player(body: Node3D) -> void: #detect if player touches the world boundary collsion shape to reload the game
	if body is CharacterBody3D:
		if len(activated_checkpoints) == 0:
			Player.instance.position = Player.instance.spawn_position
		else:
			var closest_checkpoint = activated_checkpoints[0]
			var closest_distance = closest_checkpoint.position.distance_squared_to(Player.instance.position)
			
			for checkpoint in activated_checkpoints: # have the newly activated checkpoint as the new checkpoint rather than staying as old one
				var distance = checkpoint.position.distance_squared_to(Player.instance.position)
				if distance < closest_distance:
					closest_checkpoint = checkpoint
					closest_distance = distance
					
			Player.instance.position = closest_checkpoint.position + Vector3(0, 5, 0)

func collect_item(item_type): #when collected a collectible, +1 in count
	collected_items[item_type] += 1
	item_labels[item_type].text = str(collected_items[item_type]) #used the spot created early in this script to show counts in UI
	
func win_game(): #when player reach the last check point that is being selected as final checkpoint
				 #display the WinLabel UI
	win_label.visible = true
	Input.mouse_mode= Input.MOUSE_MODE_VISIBLE #untoggle the mouse when displaying WinLabel UI
	is_game_over = true


func reload_scene() -> void: #restart the game when player clicks on restart button in WinLabel UI
	get_tree().reload_current_scene() # Replace with function body.


func to_main_menu() -> void:
	get_tree().change_scene_to_file("res://scenes/main_menu.tscn") # Replace with function body.
