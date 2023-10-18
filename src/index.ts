import { BebeNormal } from "./model/BebeNormal"
import { BebePrematuro } from "./model/BebePrematuro"
import { BebeNatimorto } from "./model/BebeNatimorto"

const b1 = new BebeNormal("Miroslav Klose", "201420142014", 1500, 50, true);
b1.setNome("Wesley Sneijder");
b1.setID("707070707070");
b1.setPeso(2500);
b1.setAltura(60);
console.log(`Nome: ${b1.getNome()}, ID: ${b1.getID()}`);
console.log(`Peso: ${b1.getPeso()}`);
console.log(`Altura: ${b1.getAltura()}`);
console.log(`Vacinado: ${b1.getVacinado()}`);

const b2 = new BebePrematuro("Neymar Jr.", "201420142015", 1200, 30, "30 semanas");
b2.setNome("Lionel Messi");
b2.setID("808080808080");
b2.setPeso(1400);
b2.setAltura(40);
console.log(`Nome: ${b2.getNome()}, ID: ${b2.getID()}`);
console.log(`Peso: ${b2.getPeso()}`);
console.log(`Altura: ${b2.getAltura()}`);
console.log(`Semanas de Gestação: ${b2.getSemanasGestacao()}`);

const b3 = new BebeNatimorto("Cristiano Ronaldo", "201420142016", 1100, 20, "Problemas de saúde");
b3.setNome("Neymar Jr.");
b3.setID("909090909090");
b3.setPeso(1300);
b3.setAltura(35);
console.log(`Nome: ${b3.getNome()}, ID: ${b3.getID()}`);
console.log(`Peso: ${b3.getPeso()}`);
console.log(`Altura: ${b3.getAltura()}`);
console.log(`Causa: ${b3.getCausa()}`);
