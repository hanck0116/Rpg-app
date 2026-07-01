export const APP_VERSION='0.1.0'; export const RULES_VERSION='newtrpg-0.4.1-pwa'; export const STORAGE_VERSION=1; export const SHEET_VERSION=1;
export const STAT_NAMES=['힘','민첩','체력','지능','지혜','외모'] as const; export type StatName=typeof STAT_NAMES[number];
export const DIFFICULTIES=[['쉬움',20],['쉬움+',30],['일상적',40],['보통-',50],['보통',60],['보통+',70],['어려움-',80],['어려움',90],['매우 어려움',100],['영웅적-',110],['영웅적',120],['영웅적+',130],['초월적-',140],['초월적',150],['초월적+',160],['전설적-',170],['전설적',180],['신화적-',190],['신화적인',200]] as const;
