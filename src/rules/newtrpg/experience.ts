export const rankForLevel=(l:number)=> l>=90?'EX':l>=80?'SSS':l>=70?'SS':l>=60?'S':l>=50?'A':l>=40?'B':l>=30?'C':l>=20?'D':l>=10?'E':'F';
export const expForNext=(level:number)=>level*100; export const missionExp=(risk:number,bonus=0)=>Math.max(1,Math.min(5,risk))*50+bonus;
export function applyExperience(level:number,exp:number,total:number,add:number){exp+=add; total+=add; let coins=0; while(exp>=expForNext(level)&&level<99){exp-=expForNext(level);level++;coins++;} return {level,experience:exp,totalExperience:total,statCoinsGained:coins,adventurerRank:rankForLevel(level)};}

export const calculateAdventureRank=rankForLevel;
