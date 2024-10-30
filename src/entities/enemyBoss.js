export function makeBoss(k, initialPos) {
  return k.make([
    k.pos(initialPos),
    k.sprite("burner", { anim: "idle" }),
    k.area({ shape: new k.Rect(k.vec2(0, 10), 12, 12) }),
    k.body({ mass: 100, jumpForce: 320 }),
    k.anchor("center"),
    k.state("idle", [
      "idle",
      "follow",
      "open-fire",
      "fire",
      "shut-fire",
      "explode",
    ]),
    k.health(15),
    k.opacity(1),
    {
      pursuitSpeed: 100,
      fireRange: 40,
      fireDuration: 1,
      setBehavior() {
        this.onStateUpdate("idle", () => {
          if (state.current().playerInBossFight) {
            this.enterState("follow");
          }
        });

        this.onStateEnter("follow", () => {
          this.play("run");
        });

        this.onStateUpdate("follow", () => {
          this.flipX = this.pos.x <= player.pos.x;
          this.moveTo(k.vec2(player.pos.x, this.pos.y + 12), this.pursuitSpeed);

          if (this.pos.dist(player.pos) < this.fireRange) {
            this.enterState("open-fire");
          }
        });

        this.onStateEnter("open-fire", () => {
          this.play("open-fire");
        });

        this.onStateEnter("fire", () => {
            const flamethrowerSound = k.play("flamethrower");
            const fireHitbox = this.add([
                k.area({ shape: new k.Rect(k.vec2(0), 70, 10)}),
                k.pos(this.flipX ? -70 : 0, 5),
                "fire-hitbox",
            ])

            fireHitbox.onCollide("player", () => {
                player.hurt(1);
                if(player.hp() === 0){
                    state.set(statePropsEnum.playerInBossFight, false);
                }
            })

            k.wait(this.fireDuration, () => {
                
            })
        })
      },
      setEvents() {},
    },
  ]);
}
