<template>
  <div class="root">
    <div class="title-rules">Règles 😎✌️</div>
    <div>Tu as 4 exercices à faire:</div>
    <ul>
      <li>Tractions</li>
      <li>Pompes</li>
      <li>Dips</li>
      <li>Planche</li>
    </ul>
    <div>Tu dois faire un nombre maximum de répétition pour chacun de ses exercices en respectant l'ordre (tractions, pompes, dips, planche)</div>
    <div>Entre chaque exercice tu as 2 minutes de temps de repos</div>
    <div>Tu as le droit pendant ta série de répétitions de prendre un arrêt de 2 secondes MAXIMUM (autant de fois que tu veux) sinon ça arrête la série en cours.</div>
    <div>Bonne chance !</div>
  </div>
</template>

<script>
export default {
  name: "Rules",
  components: {
  },
}
</script>

<style scoped lang="scss">
  .root {
    text-align: justify;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100% - 50px);
    color: white;
  }
  .title-rules {
    margin-top: 200px;
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: bold;
  }
</style>
