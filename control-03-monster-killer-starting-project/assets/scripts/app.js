const MONSTER_ATTACK = 10;
const PLAYER_ATTACK = 10;
const PLAYER_HEAL = 10;
const MAX_LIFE = 100;
let playerHealth = MAX_LIFE;
let monsterHealth = MAX_LIFE

function healtCheck(){
  
}

function attackMonster() {
  dealMonsterDamage(MONSTER_ATTACK);
  dealPlayerDamage(PLAYER_ATTACK);
  healtCheck();
}

function healPlayer() {
  increasePlayerHealth(PLAYER_HEAL);
}

attackBtn.addEventListener("click", attackMonster);
healBtn.addEventListener("click", healPlayer);
