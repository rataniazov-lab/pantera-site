{\rtf1\ansi\ansicpg1251\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 "use client";\
import \{ useEffect, useState, useCallback \} from "react";\
\
type Page = "home" | "directions" | "dest" | "cruise" | "videos" | "contacts";\
\
const LOGO = "https://res.cloudinary.com/dass5gqvk/image/upload/v1779385406/pantera_luxe_logo_v0gbmo.png";\
\
const DESTS_PREVIEW = [\
  \{ key:"dubai",   flag:"\uc0\u55356 \u56806 \u55356 \u56810 ", title:"\u1044 \u1091 \u1073 \u1072 \u1081 ",          sub:"\u1043 \u1086 \u1088 \u1086 \u1076  \u1073 \u1091 \u1076 \u1091 \u1097 \u1077 \u1075 \u1086  \'97 \u1085 \u1077 \u1073 \u1086 \u1089 \u1082 \u1088 \u1105 \u1073 \u1099 , \u1087 \u1091 \u1089 \u1090 \u1099 \u1085 \u1103 , \u1088 \u1086 \u1089 \u1082 \u1086 \u1096 \u1100 ",      img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=70", tags:["\u55356 \u57302 \u65039  \u1055 \u1083 \u1103 \u1078 ","\u55356 \u57305 \u65039  \u1043 \u1086 \u1088 \u1086 \u1076 ","\u9992 \u65039  5\u1095 ","\u1086 \u1090  $499"] \},\
  \{ key:"sharm",   flag:"\uc0\u55356 \u56810 \u55356 \u56812 ", title:"\u1064 \u1072 \u1088 \u1084  \u1069 \u1083 \u1100  \u1064 \u1077 \u1081 \u1093 ",  sub:"\u1046 \u1077 \u1084 \u1095 \u1091 \u1078 \u1080 \u1085 \u1072  \u1050 \u1088 \u1072 \u1089 \u1085 \u1086 \u1075 \u1086  \u1084 \u1086 \u1088 \u1103  \'97 \u1076 \u1072 \u1081 \u1074 \u1080 \u1085 \u1075 , \u1088 \u1080 \u1092 , \u1074 \u1077 \u1095 \u1085 \u1086 \u1077  \u1083 \u1077 \u1090 \u1086 ",img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=70", tags:["\u55356 \u57302 \u65039  \u1055 \u1083 \u1103 \u1078 ","\u55358 \u56639  \u1044 \u1072 \u1081 \u1074 \u1080 \u1085 \u1075 ","\u9992 \u65039  4\u1095 ","\u1086 \u1090  $380"] \},\
  \{ key:"turkey",  flag:"\uc0\u55356 \u56825 \u55356 \u56823 ", title:"\u1058 \u1091 \u1088 \u1094 \u1080 \u1103 ",          sub:"\u1057 \u1090 \u1072 \u1084 \u1073 \u1091 \u1083 , \u1050 \u1072 \u1087 \u1087 \u1072 \u1076 \u1086 \u1082 \u1080 \u1103 , \u1040 \u1085 \u1090 \u1072 \u1083 \u1100 \u1103  \'97 \u1076 \u1074 \u1072  \u1082 \u1086 \u1085 \u1090 \u1080 \u1085 \u1077 \u1085 \u1090 \u1072 ",      img:"https://images.unsplash.com/photo-1530838236892-bce9f63a3ef1?w=600&q=70", tags:["\u55356 \u57305 \u65039  \u1057 \u1090 \u1072 \u1084 \u1073 \u1091 \u1083 ","\u55356 \u57302 \u65039  \u1040 \u1085 \u1090 \u1072 \u1083 \u1100 \u1103 ","\u55356 \u57224  \u1050 \u1072 \u1087 \u1087 \u1072 \u1076 \u1086 \u1082 \u1080 \u1103 ","\u1086 \u1090  $350"] \},\
];\
\
const DIR_CARDS = [\
  \{ key:"dubai",   flag:"\uc0\u55356 \u56806 \u55356 \u56810 ", name:"\u1044 \u1091 \u1073 \u1072 \u1081 ",           sub:"\u1054 \u1040 \u1069  \'b7 \u1086 \u1090  $499",            cat:"city beach",  img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779484881/Dubai2_zebzf8.png" \},\
  \{ key:"sharm",   flag:"\uc0\u55356 \u56810 \u55356 \u56812 ", name:"\u1064 \u1072 \u1088 \u1084  \u1069 \u1083 \u1100  \u1064 \u1077 \u1081 \u1093 ",   sub:"\u1045 \u1075 \u1080 \u1087 \u1077 \u1090  \'b7 \u1086 \u1090  $380",          cat:"beach",       img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779524661/%D0%A8%D0%B0%D1%80%D0%BC_enh5kh.png" \},\
  \{ key:"turkey",  flag:"\uc0\u55356 \u56825 \u55356 \u56823 ", name:"\u1058 \u1091 \u1088 \u1094 \u1080 \u1103 ",           sub:"\u1057 \u1090 \u1072 \u1084 \u1073 \u1091 \u1083 , \u1040 \u1085 \u1090 \u1072 \u1083 \u1100 \u1103  \'b7 \u1086 \u1090  $350",cat:"beach city",  img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%A1%D0%A2%D0%90%D0%9C%D0%91%D0%A3%D0%9B_xak5js.png" \},\
  \{ key:"maldives",flag:"\uc0\u55356 \u56818 \u55356 \u56827 ", name:"\u1052 \u1072 \u1083 \u1100 \u1076 \u1080 \u1074 \u1099 ",         sub:"\u1086 \u1090  $1200",                  cat:"beach",       img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%9C%D0%90%D0%9B%D0%AC%D0%94%D0%98%D0%92%D0%AB_nshijd.png" \},\
  \{ key:"thailand",flag:"\uc0\u55356 \u56825 \u55356 \u56813 ", name:"\u1058 \u1072 \u1080 \u1083 \u1072 \u1085 \u1076 ",          sub:"\u1055 \u1093 \u1091 \u1082 \u1077 \u1090  \'b7 \u1086 \u1090  $650",          cat:"beach",       img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779487245/tai_at5qsu.png" \},\
  \{ key:"georgia", flag:"\uc0\u55356 \u56812 \u55356 \u56810 ", name:"\u1043 \u1088 \u1091 \u1079 \u1080 \u1103 ",           sub:"\u1086 \u1090  $290",                   cat:"city nature", img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%93%D0%A0%D0%A3%D0%97%D0%98%D0%AF_srbigi.png" \},\
  \{ key:"baku",    flag:"\uc0\u55356 \u56806 \u55356 \u56831 ", name:"\u1040 \u1079 \u1077 \u1088 \u1073 \u1072 \u1081 \u1076 \u1078 \u1072 \u1085 ",      sub:"\u1041 \u1072 \u1082 \u1091  \'b7 \u1086 \u1090  $250",            cat:"city",        img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%91%D0%90%D0%9A%D0%A3_vycjoz.png" \},\
  \{ key:"karlovy", flag:"\uc0\u55356 \u56808 \u55356 \u56831 ", name:"\u1050 \u1072 \u1088 \u1083 \u1086 \u1074 \u1099  \u1042 \u1072 \u1088 \u1099 ",     sub:"\u1063 \u1077 \u1093 \u1080 \u1103 ",                     cat:"health city", img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%9A%D0%90%D0%A0%D0%9B%D0%9E%D0%92%D0%AB_e4xtis.png" \},\
  \{ key:"naftalan",flag:"\uc0\u55356 \u56806 \u55356 \u56831 ", name:"\u1053 \u1072 \u1092 \u1090 \u1072 \u1083 \u1072 \u1085 ",         sub:"\u1040 \u1079 \u1077 \u1088 \u1073 \u1072 \u1081 \u1076 \u1078 \u1072 \u1085 ",               cat:"health",      img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520521/%D0%9D%D0%90%D0%A4%D0%A2%D0%90%D0%9B%D0%90%D0%9D_eihxuc.png" \},\
  \{ key:"vietnam", flag:"\uc0\u55356 \u56827 \u55356 \u56819 ", name:"\u1042 \u1100 \u1077 \u1090 \u1085 \u1072 \u1084 ",          sub:"\u1086 \u1090  $600",                   cat:"beach",       img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%92%D0%AC%D0%95%D0%A2%D0%9D%D0%90%D0%9C_bstiaw.png" \},\
  \{ key:"qatar",   flag:"\uc0\u55356 \u56822 \u55356 \u56806 ", name:"\u1050 \u1072 \u1090 \u1072 \u1088 ",            sub:"\u1044 \u1086 \u1093 \u1072 ",                      cat:"city",        img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%94%D0%9E%D0%A5%D0%90_hgsxss.png" \},\
  \{ key:"issiyk",  flag:"\uc0\u55356 \u56816 \u55356 \u56812 ", name:"\u1048 \u1089 \u1089 \u1099 \u1082 -\u1050 \u1091 \u1083 \u1100 ",      sub:"\u1086 \u1090  $180",                   cat:"nature beach",img:"https://res.cloudinary.com/dass5gqvk/image/upload/v1779520520/%D0%98%D0%A1%D0%A1%D0%AB%D0%9A_%D0%9A%D0%A3%D0%9B%D0%AC_lrwgpn.png" \},\
];\
\
const REVIEWS = [\
  \{ av:"\uc0\u1040 ", bg:"linear-gradient(135deg,#ff6b35,#ffd166)", name:"\u1040 \u1083 \u1080 \u1096 \u1077 \u1088  \u1050 .",  dest:"\u9992 \u65039  \u1044 \u1091 \u1073 \u1072 \u1081  2025", text:"\'ab\u1051 \u1077 \u1090 \u1077 \u1083 \u1080  \u1074  \u1044 \u1091 \u1073 \u1072 \u1081  \u1074 \u1089 \u1077 \u1081  \u1089 \u1077 \u1084 \u1100 \u1105 \u1081 . \u1042 \u1089 \u1105  \u1080 \u1076 \u1077 \u1072 \u1083 \u1100 \u1085 \u1086 : \u1090 \u1088 \u1072 \u1085 \u1089 \u1092 \u1077 \u1088 , \u1086 \u1090 \u1077 \u1083 \u1100  5*, \u1101 \u1082 \u1089 \u1082 \u1091 \u1088 \u1089 \u1080 \u1080 !\'bb" \},\
  \{ av:"\uc0\u1052 ", bg:"linear-gradient(135deg,#e1306c,#833ab4)", name:"\u1052 \u1072 \u1083 \u1080 \u1082 \u1072  \u1070 .",   dest:"\u55356 \u57317  \u1052 \u1077 \u1076 \u1090 \u1091 \u1088 \u1080 \u1079 \u1084 ",  text:"\'ab\u1052 \u1077 \u1076 \u1090 \u1091 \u1088 \u1080 \u1079 \u1084  \u1074  \u1058 \u1091 \u1088 \u1094 \u1080 \u1102  \'97 \u1074 \u1079 \u1103 \u1083 \u1080  \u1074 \u1089 \u1105  \u1074  \u1089 \u1074 \u1086 \u1080  \u1088 \u1091 \u1082 \u1080 : \u1074 \u1080 \u1079 \u1091 , \u1082 \u1083 \u1080 \u1085 \u1080 \u1082 \u1091 , \u1087 \u1077 \u1088 \u1077 \u1074 \u1086 \u1076 \u1095 \u1080 \u1082 \u1072 .\'bb" \},\
  \{ av:"\uc0\u1041 ", bg:"linear-gradient(135deg,#06b6d4,#2196f3)", name:"\u1041 \u1086 \u1073 \u1091 \u1088  \u1056 .",    dest:"\u55356 \u56810 \u55356 \u56812  \u1045 \u1075 \u1080 \u1087 \u1077 \u1090 ",    text:"\'ab\u1043 \u1086 \u1088 \u1103 \u1097 \u1080 \u1081  \u1090 \u1091 \u1088  \u1074  \u1045 \u1075 \u1080 \u1087 \u1077 \u1090  \u1079 \u1072  2 \u1076 \u1085 \u1103  \u1076 \u1086  \u1074 \u1099 \u1083 \u1077 \u1090 \u1072 . \u1054 \u1090 \u1077 \u1083 \u1100  \u1083 \u1091 \u1095 \u1096 \u1077  \u1095 \u1077 \u1084  \u1086 \u1078 \u1080 \u1076 \u1072 \u1083 !\'bb" \},\
  \{ av:"\uc0\u1053 ", bg:"linear-gradient(135deg,#22c55e,#06b6d4)", name:"\u1053 \u1080 \u1083 \u1091 \u1092 \u1072 \u1088  \u1048 .",  dest:"\u55356 \u56818 \u55356 \u56827  \u1052 \u1072 \u1083 \u1100 \u1076 \u1080 \u1074 \u1099 ",  text:"\'ab\u1052 \u1072 \u1083 \u1100 \u1076 \u1080 \u1074 \u1099  \'97 \u1084 \u1077 \u1076 \u1086 \u1074 \u1099 \u1081  \u1084 \u1077 \u1089 \u1103 \u1094 . \u1042 \u1086 \u1076 \u1085 \u1086 \u1077  \u1073 \u1091 \u1085 \u1075 \u1072 \u1083 \u1086 , \u1079 \u1072 \u1082 \u1072 \u1090 \u1099 ... \u1053 \u1077 \u1079 \u1072 \u1073 \u1099 \u1074 \u1072 \u1077 \u1084 \u1086 !\'bb" \},\
  \{ av:"\uc0\u1047 ", bg:"linear-gradient(135deg,#ffd166,#ff6b35)", name:"\u1047 \u1072 \u1092 \u1072 \u1088  \u1053 .",    dest:"\u9992 \u65039  \u1058 \u1072 \u1080 \u1083 \u1072 \u1085 \u1076 ",    text:"\'ab\u1050 \u1086 \u1088 \u1087 \u1086 \u1088 \u1072 \u1090 \u1080 \u1074  45 \u1095 \u1077 \u1083 \u1086 \u1074 \u1077 \u1082  \u1074  \u1058 \u1072 \u1080 \u1083 \u1072 \u1085 \u1076  \'97 \u1074 \u1089 \u1105  \u1095 \u1105 \u1090 \u1082 \u1086 , \u1082 \u1086 \u1084 \u1072 \u1085 \u1076 \u1072  \u1074  \u1074 \u1086 \u1089 \u1090 \u1086 \u1088 \u1075 \u1077 !\'bb" \},\
];\
\
const INFO_DATA: Record<string,\{currency:string;lang:string;religion:string;climate:string;visa:string\}> = \{\
  dubai:   \{ currency:"\uc0\u1044 \u1080 \u1088 \u1093 \u1072 \u1084  \u1054 \u1040 \u1069  (AED), 1$\u8776 3.67",      lang:"\u1040 \u1088 \u1072 \u1073 \u1089 \u1082 \u1080 \u1081 , \u1072 \u1085 \u1075 \u1083 \u1080 \u1081 \u1089 \u1082 \u1080 \u1081  \u1074 \u1077 \u1079 \u1076 \u1077 ",                      religion:"\u1048 \u1089 \u1083 \u1072 \u1084 . \u1059 \u1074 \u1072 \u1078 \u1072 \u1081 \u1090 \u1077  \u1087 \u1088 \u1072 \u1074 \u1080 \u1083 \u1072  \u1087 \u1091 \u1073 \u1083 \u1080 \u1095 \u1085 \u1086 ",             climate:"\u1054 \u1082 \u1090 -\u1072 \u1087 \u1088 : +25\'b0C. \u1051 \u1077 \u1090 \u1086 : \u1076 \u1086  +48\'b0C!",              visa:"\u1042 \u1080 \u1079 \u1072  \u1085 \u1077  \u1085 \u1091 \u1078 \u1085 \u1072  30 \u1076 \u1085 \u1077 \u1081 " \},\
  sharm:   \{ currency:"\uc0\u1045 \u1075 \u1080 \u1087 \u1077 \u1090 \u1089 \u1082 \u1080 \u1081  \u1092 \u1091 \u1085 \u1090  (EGP), 1$\u8776 50",    lang:"\u1040 \u1088 \u1072 \u1073 \u1089 \u1082 \u1080 \u1081 , \u1072 \u1085 \u1075 \u1083 \u1080 \u1081 \u1089 \u1082 \u1080 \u1081  \u1074  \u1090 \u1091 \u1088 \u1079 \u1086 \u1085 \u1072 \u1093 ",                 religion:"\u1048 \u1089 \u1083 \u1072 \u1084 . \u1064 \u1072 \u1088 \u1084  \u1089 \u1074 \u1077 \u1090 \u1089 \u1082 \u1080 \u1081  \u1082 \u1091 \u1088 \u1086 \u1088 \u1090 ",                 climate:"\u1053 \u1086 \u1103 \u1073 \u1088 \u1100 -\u1072 \u1087 \u1088 \u1077 \u1083 \u1100 : +24-28\'b0C. \u1051 \u1077 \u1090 \u1086 : +40\'b0C",         visa:"Sinai Only \u1074 \u1080 \u1079 \u1072  $25 \u1074  \u1072 \u1101 \u1088 \u1086 \u1087 \u1086 \u1088 \u1090 \u1091 " \},\
  turkey:  \{ currency:"\uc0\u1058 \u1091 \u1088 \u1077 \u1094 \u1082 \u1072 \u1103  \u1083 \u1080 \u1088 \u1072  (TRY)",              lang:"\u1058 \u1091 \u1088 \u1077 \u1094 \u1082 \u1080 \u1081 , \u1088 \u1091 \u1089 \u1089 \u1082 \u1080 \u1081  \u1074  \u1090 \u1091 \u1088 \u1080 \u1089 \u1090 \u1080 \u1095 \u1077 \u1089 \u1082 \u1080 \u1093  \u1079 \u1086 \u1085 \u1072 \u1093 ",         religion:"\u1048 \u1089 \u1083 \u1072 \u1084  (\u1089 \u1074 \u1077 \u1090 \u1089 \u1082 \u1080 \u1081 ). \u1042  \u1084 \u1077 \u1095 \u1077 \u1090 \u1080  \'97 \u1087 \u1088 \u1080 \u1082 \u1088 \u1099 \u1090 \u1072 \u1103  \u1075 \u1086 \u1083 \u1086 \u1074 \u1072 ",climate:"\u1040 \u1085 \u1090 \u1072 \u1083 \u1100 \u1103 : +30\'b0C \u1083 \u1077 \u1090 \u1086 \u1084 . \u1057 \u1090 \u1072 \u1084 \u1073 \u1091 \u1083 : +28\'b0C \u1083 \u1077 \u1090 \u1086 \u1084 ",   visa:"\u1042 \u1080 \u1079 \u1072  \u1085 \u1077  \u1085 \u1091 \u1078 \u1085 \u1072  30 \u1076 \u1085 \u1077 \u1081 " \},\
  georgia: \{ currency:"\uc0\u1043 \u1088 \u1091 \u1079 \u1080 \u1085 \u1089 \u1082 \u1080 \u1081  \u1083 \u1072 \u1088 \u1080  (GEL), 1$\u8776 2.7",   lang:"\u1043 \u1088 \u1091 \u1079 \u1080 \u1085 \u1089 \u1082 \u1080 \u1081 , \u1088 \u1091 \u1089 \u1089 \u1082 \u1080 \u1081  \u1087 \u1086 \u1085 \u1080 \u1084 \u1072 \u1102 \u1090  \u1074 \u1089 \u1077 ",                religion:"\u1055 \u1088 \u1072 \u1074 \u1086 \u1089 \u1083 \u1072 \u1074 \u1085 \u1086 \u1077  \u1093 \u1088 \u1080 \u1089 \u1090 \u1080 \u1072 \u1085 \u1089 \u1090 \u1074 \u1086 ",                   climate:"\u1058 \u1073 \u1080 \u1083 \u1080 \u1089 \u1080 : +32\'b0C \u1083 \u1077 \u1090 \u1086 \u1084 . \u1041 \u1072 \u1090 \u1091 \u1084 \u1080 : \u1089 \u1091 \u1073 \u1090 \u1088 \u1086 \u1087 \u1080 \u1082 \u1080 ",     visa:"30 \u1076 \u1085 \u1077 \u1081  \u1073 \u1077 \u1079  \u1074 \u1080 \u1079 \u1099 " \},\
  maldives:\{ currency:"\uc0\u1052 \u1072 \u1083 \u1100 \u1076 \u1080 \u1074 \u1089 \u1082 \u1072 \u1103  \u1088 \u1091 \u1092 \u1080 \u1103 , USD \u1074 \u1077 \u1079 \u1076 \u1077 ",     lang:"\u1044 \u1080 \u1074 \u1077 \u1093 \u1080  \u1080  \u1072 \u1085 \u1075 \u1083 \u1080 \u1081 \u1089 \u1082 \u1080 \u1081 ",                             religion:"\u1048 \u1089 \u1083 \u1072 \u1084  \'97 \u1091 \u1074 \u1072 \u1078 \u1072 \u1081 \u1090 \u1077  \u1074  \u1076 \u1077 \u1088 \u1077 \u1074 \u1085 \u1103 \u1093 ",                 climate:"\u1058 \u1088 \u1086 \u1087 \u1080 \u1095 \u1077 \u1089 \u1082 \u1080 \u1081 , +28\'b0C \u1082 \u1088 \u1091 \u1075 \u1083 \u1099 \u1081  \u1075 \u1086 \u1076 ",               visa:"\u1042 \u1080 \u1079 \u1072  \u1087 \u1086  \u1087 \u1088 \u1080 \u1083 \u1105 \u1090 \u1091  \u1073 \u1077 \u1089 \u1087 \u1083 \u1072 \u1090 \u1085 \u1086 " \},\
  thailand:\{ currency:"\uc0\u1058 \u1072 \u1081 \u1089 \u1082 \u1080 \u1081  \u1073 \u1072 \u1090  (THB), 1$\u8776 35",         lang:"\u1058 \u1072 \u1081 \u1089 \u1082 \u1080 \u1081 , \u1072 \u1085 \u1075 \u1083 \u1080 \u1081 \u1089 \u1082 \u1080 \u1081  \u1074  \u1090 \u1091 \u1088 \u1079 \u1086 \u1085 \u1072 \u1093 ",                  religion:"\u1041 \u1091 \u1076 \u1076 \u1080 \u1079 \u1084  \'97 \u1074  \u1093 \u1088 \u1072 \u1084 \u1099  \u1074  \u1079 \u1072 \u1082 \u1088 \u1099 \u1090 \u1086 \u1081  \u1086 \u1076 \u1077 \u1078 \u1076 \u1077 ",         climate:"+32\'b0C \u1090 \u1088 \u1086 \u1087 \u1080 \u1095 \u1077 \u1089 \u1082 \u1080 \u1081 . \u1051 \u1091 \u1095 \u1096 \u1080 \u1081  \u1089 \u1077 \u1079 \u1086 \u1085 : \u1085 \u1086 \u1103 \u1073 \u1088 \u1100 -\u1084 \u1072 \u1088 \u1090 ", visa:"30 \u1076 \u1085 \u1077 \u1081  \u1073 \u1077 \u1079  \u1074 \u1080 \u1079 \u1099 " \},\
\};\
\
// \uc0\u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472  Countdown \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \
function useCountdown() \{\
  const [t, setT] = useState(\{ h:"23", m:"59", s:"59" \});\
  useEffect(() => \{\
    let end = 0;\
    try \{ end = +(localStorage.getItem("pl_end") || 0); \} catch \{\}\
    if (!end || Date.now() > end) \{\
      end = Date.now() + 86_400_000;\
      try \{ localStorage.setItem("pl_end", String(end)); \} catch \{\}\
    \}\
    const tick = () => \{\
      const d = Math.max(0, end - Date.now());\
      setT(\{\
        h: String(Math.floor(d / 3_600_000)).padStart(2, "0"),\
        m: String(Math.floor((d % 3_600_000) / 60_000)).padStart(2, "0"),\
        s: String(Math.floor((d % 60_000) / 1_000)).padStart(2, "0"),\
      \});\
    \};\
    tick();\
    const id = setInterval(tick, 1000);\
    return () => clearInterval(id);\
  \}, []);\
  return t;\
\}\
\
// \uc0\u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472  Nav \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \
function Nav(\{ page, onNav, mob, onMob \}: \{\
  page: Page; onNav: (p: Page) => void; mob: boolean; onMob: () => void;\
\}) \{\
  const links: [Page, string][] = [\
    ["home","\uc0\u1043 \u1083 \u1072 \u1074 \u1085 \u1072 \u1103 "], ["directions","\u1053 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1103 "], ["cruise","\u55357 \u56994  \u1050 \u1088 \u1091 \u1080 \u1079 \u1099 "], ["videos","\u55356 \u57260  \u1042 \u1080 \u1076 \u1077 \u1086 "],\
  ];\
  return (\
    <>\
      <nav className="nav">\
        <button className="nav-logo" onClick=\{() => onNav("home")\}>\
          \{/* eslint-disable-next-line @next/next/no-img-element */\}\
          <img src=\{LOGO\} alt="PANTERA LUXE" width=\{38\} height=\{38\} />\
          <div className="nav-logo-text">\
            <span className="name">PANTERA LUXE</span>\
            <span className="sub">\uc0\u1058 \u1091 \u1088 \u1099  \u1080 \u1079  \u1058 \u1072 \u1096 \u1082 \u1077 \u1085 \u1090 \u1072 </span>\
          </div>\
        </button>\
\
        <div className="nav-links">\
          \{links.map(([p, l]) => (\
            <button key=\{p\} className=\{`nav-link$\{page === p ? " active" : ""\}`\} onClick=\{() => onNav(p)\}>\{l\}</button>\
          ))\}\
          <button className="nav-cta" onClick=\{() => onNav("contacts")\}>\uc0\u1054 \u1089 \u1090 \u1072 \u1074 \u1080 \u1090 \u1100  \u1079 \u1072 \u1103 \u1074 \u1082 \u1091 </button>\
        </div>\
\
        <button className="hamburger" onClick=\{onMob\}>\
          <span style=\{mob ? \{ transform:"rotate(45deg) translate(5px,5px)" \} : \{\}\} />\
          <span style=\{mob ? \{ opacity:0 \} : \{\}\} />\
          <span style=\{mob ? \{ transform:"rotate(-45deg) translate(5px,-5px)" \} : \{\}\} />\
        </button>\
      </nav>\
\
      <div className=\{`mob-menu$\{mob ? " open" : ""\}`\}>\
        <button className="mob-close" onClick=\{onMob\}>\uc0\u10005 </button>\
        \{([...links, ["contacts","\uc0\u1050 \u1086 \u1085 \u1090 \u1072 \u1082 \u1090 \u1099 "]] as [Page,string][]).map(([p,l]) => (\
          <button key=\{p\} className="mob-link" onClick=\{() => \{ onNav(p); onMob(); \}\}>\{l\}</button>\
        ))\}\
      </div>\
    </>\
  );\
\}\
\
// \uc0\u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472  Home \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \
function HomePage(\{ onNav, onDest \}: \{ onNav:(p:Page)=>void; onDest:(k:string)=>void \}) \{\
  const cd = useCountdown();\
  return (\
    <div style=\{\{ paddingTop: 60 \}\}>\
      \{/* Hero */\}\
      <div className="hero">\
        <div className="hero-bg" />\
        <div className="hero-content">\
          <div className="hero-badge">\uc0\u9992 \u65039  \u1058 \u1091 \u1088 \u1080 \u1089 \u1090 \u1080 \u1095 \u1077 \u1089 \u1082 \u1086 \u1077  \u1072 \u1075 \u1077 \u1085 \u1090 \u1089 \u1090 \u1074 \u1086  \u1074  \u1058 \u1072 \u1096 \u1082 \u1077 \u1085 \u1090 \u1077 </div>\
          <h1>\uc0\u1054 \u1090 \u1082 \u1088 \u1086 \u1081 \u1090 \u1077  \u1084 \u1080 \u1088 <br />\u1074 \u1084 \u1077 \u1089 \u1090 \u1077  \u1089  <span>PANTERA LUXE</span></h1>\
          <p className="hero-sub">\uc0\u1043 \u1080 \u1076 \u1099  \u1087 \u1086  14+ \u1085 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1103 \u1084 , \u1075 \u1086 \u1088 \u1103 \u1097 \u1080 \u1077  \u1090 \u1091 \u1088 \u1099 , \u1084 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1080 \u1081  \u1090 \u1091 \u1088 \u1080 \u1079 \u1084 , \u1082 \u1088 \u1091 \u1080 \u1079 \u1099 .</p>\
          <div className="hero-btns">\
            <button className="btn-primary" onClick=\{() => onNav("directions")\}>\uc0\u55357 \u56826 \u65039  \u1042 \u1099 \u1073 \u1088 \u1072 \u1090 \u1100  \u1085 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1077 </button>\
            <button className="btn-ghost"   onClick=\{() => onNav("contacts")\}>\uc0\u1055 \u1086 \u1083 \u1091 \u1095 \u1080 \u1090 \u1100  \u1082 \u1086 \u1085 \u1089 \u1091 \u1083 \u1100 \u1090 \u1072 \u1094 \u1080 \u1102 </button>\
            <a className="btn-fire" href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer">\uc0\u55357 \u56613  \u1043 \u1086 \u1088 \u1103 \u1097 \u1080 \u1077  \u1090 \u1091 \u1088 \u1099 </a>\
          </div>\
          <div className="hero-stats">\
            \{[["5000+","\uc0\u1050 \u1083 \u1080 \u1077 \u1085 \u1090 \u1086 \u1074 "],["14+","\u1053 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1081 "],["10 \u1083 \u1077 \u1090 ","\u1053 \u1072  \u1088 \u1099 \u1085 \u1082 \u1077 "],["24/7","\u1055 \u1086 \u1076 \u1076 \u1077 \u1088 \u1078 \u1082 \u1072 "]].map(([v,l]) => (\
              <div key=\{l\} className="hero-stat"><strong>\{v\}</strong><span>\{l\}</span></div>\
            ))\}\
          </div>\
        </div>\
      </div>\
\
      \{/* Hot strip */\}\
      <div className="hot-strip">\
        <span className="hot-badge">\uc0\u55357 \u56613  \u1043 \u1054 \u1056 \u1048 \u1058 </span>\
        <p className="hot-text">\uc0\u1044 \u1091 \u1073 \u1072 \u1081  7 \u1085 \u1086 \u1095 \u1077 \u1081  \'97 <span>\u1086 \u1090  $499</span> \'b7 \u1042 \u1099 \u1083 \u1077 \u1090  \u1080 \u1079  \u1058 \u1072 \u1096 \u1082 \u1077 \u1085 \u1090 \u1072 </p>\
        <div className="cd">\
          <div className="cd-box"><strong>\{cd.h\}</strong><span>\uc0\u1095 </span></div>\
          <span className="cd-sep">:</span>\
          <div className="cd-box"><strong>\{cd.m\}</strong><span>\uc0\u1084 </span></div>\
          <span className="cd-sep">:</span>\
          <div className="cd-box"><strong>\{cd.s\}</strong><span>\uc0\u1089 </span></div>\
        </div>\
        <button className="btn-primary" style=\{\{ padding:"7px 16px", fontSize:12 \}\} onClick=\{() => onNav("contacts")\}>\
          \uc0\u1059 \u1089 \u1087 \u1077 \u1090 \u1100  \u8594 \
        </button>\
      </div>\
\
      \{/* Directions preview */\}\
      <div className="sec">\
        <div className="site-container">\
          <span className="section-tag">\uc0\u1053 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1103 </span>\
          <h2 className="section-title">\uc0\u1050 \u1091 \u1076 \u1072  \u1087 \u1086 \u1083 \u1077 \u1090 \u1080 \u1084 ?</h2>\
          <p className="section-sub">14 \uc0\u1085 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1081  \u1089  \u1087 \u1086 \u1083 \u1085 \u1099 \u1084 \u1080  \u1075 \u1080 \u1076 \u1072 \u1084 \u1080  \'97 \u1086 \u1090 \u1077 \u1083 \u1080 , \u1087 \u1083 \u1103 \u1078 \u1080 , \u1082 \u1091 \u1083 \u1100 \u1090 \u1091 \u1088 \u1072 , \u1089 \u1086 \u1074 \u1077 \u1090 \u1099 </p>\
          <div className="cards-grid">\
            \{DESTS_PREVIEW.map(d => (\
              <div key=\{d.key\} className="card" onClick=\{() => onDest(d.key)\}>\
                <div className="card-img">\
                  \{/* eslint-disable-next-line @next/next/no-img-element */\}\
                  <img src=\{d.img\} alt=\{d.title\} loading="lazy" />\
                </div>\
                <div className="card-body">\
                  <h3>\{d.flag\} \{d.title\}</h3>\
                  <p>\{d.sub\}</p>\
                  <span className="card-link">\uc0\u1055 \u1086 \u1083 \u1085 \u1099 \u1081  \u1075 \u1080 \u1076  \u8594 </span>\
                </div>\
              </div>\
            ))\}\
            <div className="card" onClick=\{() => onNav("directions")\}>\
              <div className="card-img" style=\{\{ background:"linear-gradient(135deg,#0d1b2a,#1a2b3c)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:44 \}\}>\uc0\u55356 \u57101 </div>\
              <div className="card-body">\
                <h3>\uc0\u1042 \u1089 \u1077  14 \u1085 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1081 </h3>\
                <p>\uc0\u1052 \u1072 \u1083 \u1100 \u1076 \u1080 \u1074 \u1099 , \u1058 \u1072 \u1080 \u1083 \u1072 \u1085 \u1076 , \u1043 \u1088 \u1091 \u1079 \u1080 \u1103 , \u1050 \u1080 \u1090 \u1072 \u1081 , \u1045 \u1074 \u1088 \u1086 \u1087 \u1072 ...</p>\
                <span className="card-link">\uc0\u1057 \u1084 \u1086 \u1090 \u1088 \u1077 \u1090 \u1100  \u1074 \u1089 \u1077  \u8594 </span>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
\
      \{/* Cruise promo */\}\
      <div className="sec sec-gray">\
        <div className="site-container">\
          <div className="cruise-box">\
            <div>\
              <span className="tag">\uc0\u1053 \u1086 \u1074 \u1086 \u1077  \u1085 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1077 </span>\
              <h2>\uc0\u55357 \u56994  \u1050 \u1088 \u1091 \u1080 \u1079 \u1099  \u1087 \u1086  \u1074 \u1089 \u1077 \u1084 \u1091  \u1084 \u1080 \u1088 \u1091 </h2>\
              <p>\uc0\u1047 \u1072 \u1073 \u1091 \u1076 \u1100 \u1090 \u1077  \u1087 \u1088 \u1086  \u1058 \u1080 \u1090 \u1072 \u1085 \u1080 \u1082  \'97 \u1089 \u1086 \u1074 \u1088 \u1077 \u1084 \u1077 \u1085 \u1085 \u1099 \u1077  \u1082 \u1088 \u1091 \u1080 \u1079 \u1099  \u1101 \u1090 \u1086  5\u9733  \u1087 \u1083 \u1072 \u1074 \u1091 \u1095 \u1080 \u1081  \u1086 \u1090 \u1077 \u1083 \u1100 . 27 \u1084 \u1080 \u1083 \u1083 \u1080 \u1086 \u1085 \u1086 \u1074  \u1095 \u1077 \u1083 \u1086 \u1074 \u1077 \u1082  \u1082 \u1072 \u1078 \u1076 \u1099 \u1081  \u1075 \u1086 \u1076  \u1074 \u1099 \u1073 \u1080 \u1088 \u1072 \u1102 \u1090  \u1082 \u1088 \u1091 \u1080 \u1079 \u1099 .</p>\
              <button className="btn-primary" style=\{\{ marginTop:18 \}\} onClick=\{() => onNav("cruise")\}>\uc0\u1059 \u1079 \u1085 \u1072 \u1090 \u1100  \u1087 \u1088 \u1086  \u1082 \u1088 \u1091 \u1080 \u1079 \u1099  \u8594 </button>\
            </div>\
            <div className="cruise-emoji">\uc0\u55357 \u56994 </div>\
          </div>\
        </div>\
      </div>\
\
      \{/* Services */\}\
      <div className="sec">\
        <div className="site-container">\
          <span className="section-tag">\uc0\u1059 \u1089 \u1083 \u1091 \u1075 \u1080 </span>\
          <h2 className="section-title">\uc0\u1063 \u1090 \u1086  \u1084 \u1099  \u1076 \u1077 \u1083 \u1072 \u1077 \u1084 </h2>\
          <div className="svc-grid">\
            \{[["\uc0\u9992 \u65039 ","\u1058 \u1091 \u1088 \u1099  \u1080 \u1079  \u1058 \u1072 \u1096 \u1082 \u1077 \u1085 \u1090 \u1072 ","\u1040 \u1074 \u1080 \u1072 \u1073 \u1080 \u1083 \u1077 \u1090 \u1099  + \u1086 \u1090 \u1077 \u1083 \u1100 "],["\u55356 \u57317 ","\u1052 \u1077 \u1076 \u1080 \u1094 \u1080 \u1085 \u1089 \u1082 \u1080 \u1081  \u1090 \u1091 \u1088 \u1080 \u1079 \u1084 ","\u1058 \u1091 \u1088 \u1094 \u1080 \u1103 , \u1050 \u1086 \u1088 \u1077 \u1103 "],["\u55357 \u56994 ","\u1050 \u1088 \u1091 \u1080 \u1079 \u1099 ","\u1052 \u1080 \u1088 \u1086 \u1074 \u1099 \u1077  \u1084 \u1072 \u1088 \u1096 \u1088 \u1091 \u1090 \u1099 "],["\u55356 \u57320 ","\u1054 \u1090 \u1077 \u1083 \u1080  \u1087 \u1086  \u1084 \u1080 \u1088 \u1091 ","100 000+ \u1074 \u1072 \u1088 \u1080 \u1072 \u1085 \u1090 \u1086 \u1074 "],["\u55357 \u56983 ","\u1058 \u1088 \u1072 \u1085 \u1089 \u1092 \u1077 \u1088 \u1099 ","\u1040 \u1101 \u1088 \u1086 \u1087 \u1086 \u1088 \u1090  \u1080  \u1072 \u1074 \u1090 \u1086 "],["\u55357 \u56421 ","\u1043 \u1088 \u1091 \u1087 \u1087 \u1086 \u1074 \u1099 \u1077  \u1090 \u1091 \u1088 \u1099 ","\u1069 \u1082 \u1086 \u1085 \u1086 \u1084 \u1080 \u1103  \u1076 \u1086  30%"]].map(([i,t,s]) => (\
              <div key=\{t\} className="svc-card"><div className="ico">\{i\}</div><h3>\{t\}</h3><p>\{s\}</p></div>\
            ))\}\
          </div>\
        </div>\
      </div>\
\
      \{/* Reviews */\}\
      <div className="sec sec-gray">\
        <div className="site-container">\
          <span className="section-tag">\uc0\u1054 \u1090 \u1079 \u1099 \u1074 \u1099 </span>\
          <h2 className="section-title">5000+ \uc0\u1076 \u1086 \u1074 \u1086 \u1083 \u1100 \u1085 \u1099 \u1093  \u1087 \u1091 \u1090 \u1077 \u1096 \u1077 \u1089 \u1090 \u1074 \u1077 \u1085 \u1085 \u1080 \u1082 \u1086 \u1074 </h2>\
        </div>\
        <div className="reviews-wrap">\
          <div className="reviews-track">\
            \{[...REVIEWS, ...REVIEWS].map((r, i) => (\
              <div key=\{i\} className="rv-card">\
                <div className="rv-stars">\uc0\u9733 \u9733 \u9733 \u9733 \u9733 </div>\
                <p className="rv-text">\{r.text\}</p>\
                <div className="rv-author">\
                  <div className="rv-av" style=\{\{ background:r.bg \}\}>\{r.av\}</div>\
                  <div><p className="rv-name">\{r.name\}</p><p className="rv-dest">\{r.dest\}</p></div>\
                </div>\
              </div>\
            ))\}\
          </div>\
        </div>\
      </div>\
    </div>\
  );\
\}\
\
// \uc0\u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472  Directions \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \
function DirectionsPage(\{ onDest, onNav \}: \{ onDest:(k:string)=>void; onNav:(p:Page)=>void \}) \{\
  const [filter, setFilter] = useState("all");\
  const visible = DIR_CARDS.filter(d => filter === "all" || d.cat.includes(filter));\
  return (\
    <div style=\{\{ paddingTop:60 \}\}>\
      <div className="dir-hero">\
        <div className="site-container">\
          <span className="section-tag">\uc0\u1042 \u1089 \u1077  \u1085 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1103 </span>\
          <h1>\uc0\u1058 \u1091 \u1088 \u1099  \u1080 \u1079  \u1058 \u1072 \u1096 \u1082 \u1077 \u1085 \u1090 \u1072 </h1>\
          <p>\uc0\u1042 \u1099 \u1073 \u1077 \u1088 \u1080 \u1090 \u1077  \u1085 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1077  \'97 \u1087 \u1086 \u1083 \u1085 \u1099 \u1081  \u1075 \u1080 \u1076  \u1089  \u1086 \u1090 \u1077 \u1083 \u1103 \u1084 \u1080 , \u1087 \u1083 \u1103 \u1078 \u1072 \u1084 \u1080 , \u1089 \u1086 \u1074 \u1077 \u1090 \u1072 \u1084 \u1080  \u1080  \u1083 \u1086 \u1082 \u1072 \u1094 \u1080 \u1103 \u1084 \u1080 </p>\
        </div>\
      </div>\
      <div className="site-container">\
        <div className="filters">\
          \{[["all","\uc0\u1042 \u1089 \u1077 "],["beach","\u55356 \u57302 \u65039  \u1055 \u1083 \u1103 \u1078 \u1085 \u1099 \u1081 "],["city","\u55356 \u57305 \u65039  \u1043 \u1086 \u1088 \u1086 \u1076 \u1072 "],["health","\u55357 \u56454  \u1051 \u1077 \u1095 \u1077 \u1085 \u1080 \u1077 "],["nature","\u55356 \u57300 \u65039  \u1055 \u1088 \u1080 \u1088 \u1086 \u1076 \u1072 "]].map(([k,l]) => (\
            <button key=\{k\} className=\{`filter-btn$\{filter===k?" active":""\}`\} onClick=\{() => setFilter(k)\}>\{l\}</button>\
          ))\}\
        </div>\
        <div className="dir-grid">\
          \{visible.map(d => (\
            <div key=\{d.key\} className="dir-card"\
              onClick=\{() => DESTS_PREVIEW.find(x => x.key===d.key) ? onDest(d.key) : onNav("contacts")\}>\
              \{/* eslint-disable-next-line @next/next/no-img-element */\}\
              <img src=\{d.img\} alt=\{d.name\} loading="lazy" />\
              <div className="dir-overlay" />\
              <div className="dir-info">\
                <p className="dir-name">\{d.flag\} \{d.name\}</p>\
                <p className="dir-sub">\{d.sub\}</p>\
              </div>\
            </div>\
          ))\}\
        </div>\
      </div>\
    </div>\
  );\
\}\
\
// \uc0\u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472  Destination detail \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \
function DestPage(\{ destKey, onBack, onNav \}: \{ destKey:string; onBack:()=>void; onNav:(p:Page)=>void \}) \{\
  const [tab, setTab] = useState(0);\
  const d = DESTS_PREVIEW.find(x => x.key === destKey);\
  if (!d) return null;\
\
  const info = INFO_DATA[d.key] ?? INFO_DATA.dubai;\
  const tabs = ["\uc0\u55356 \u57286  \u1055 \u1088 \u1077 \u1084 \u1080 \u1091 \u1084 ","\u11088  \u1051 \u1091 \u1095 \u1096 \u1080 \u1077 ","\u55357 \u56523  \u1050 \u1091 \u1083 \u1100 \u1090 \u1091 \u1088 \u1072 ","\u55357 \u56481  \u1057 \u1086 \u1074 \u1077 \u1090 \u1099 ","\u55357 \u56525  \u1051 \u1086 \u1082 \u1072 \u1094 \u1080 \u1080 "];\
  const premiumHotels = ["Burj Al Arab","Atlantis The Palm","Four Seasons","One&Only Royal Mirage","Palazzo Versace"];\
  const topHotels     = ["Jumeirah Beach Hotel","Madinat Jumeirah","Sofitel The Palm","Address Beach Resort","Anantara Palm"];\
\
  return (\
    <div style=\{\{ paddingTop:60 \}\}>\
      <div className="dest-hero">\
        \{/* eslint-disable-next-line @next/next/no-img-element */\}\
        <img src=\{d.img\} alt=\{d.title\} loading="lazy" />\
        <div className="dest-hero-overlay" />\
        <div className="dest-hero-content site-container">\
          <button className="back-btn" onClick=\{onBack\}\
            style=\{\{ background:"rgba(255,255,255,0.12)", color:"#fff", border:"1px solid rgba(255,255,255,0.25)" \}\}>\
            \uc0\u8592  \u1042 \u1089 \u1077  \u1085 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1103 \
          </button>\
          <h1>\{d.flag\} \{d.title\}</h1>\
          <p>\{d.sub\}</p>\
          <div className="dest-tags">\{d.tags.map(t => <span key=\{t\} className="dest-tag">\{t\}</span>)\}</div>\
        </div>\
      </div>\
\
      <div className="dest-nav">\
        <div className="dest-nav-inner site-container">\
          \{tabs.map((t, i) => (\
            <button key=\{i\} className=\{`dest-tab$\{tab===i?" active":""\}`\} onClick=\{() => setTab(i)\}>\{t\}</button>\
          ))\}\
        </div>\
      </div>\
\
      <div className="site-container" style=\{\{ padding:"40px 20px 60px" \}\}>\
        \{tab === 0 && (\
          <>\
            <div className="fomo-box">\
              <span className="fi">\uc0\u55356 \u57286 </span>\
              <div><h3>\uc0\u1051 \u1091 \u1095 \u1096 \u1080 \u1077  \u1085 \u1086 \u1084 \u1077 \u1088 \u1072  \u1073 \u1088 \u1086 \u1085 \u1080 \u1088 \u1091 \u1102 \u1090 \u1089 \u1103  \u1079 \u1072  3-6 \u1084 \u1077 \u1089 \u1103 \u1094 \u1077 \u1074 </h3><p>\u1050 \u1072 \u1078 \u1076 \u1099 \u1081  \u1076 \u1077 \u1085 \u1100  \u1086 \u1078 \u1080 \u1076 \u1072 \u1085 \u1080 \u1103  = \u1084 \u1077 \u1085 \u1100 \u1096 \u1077  \u1074 \u1099 \u1073 \u1086 \u1088 \u1072  \u1080  \u1074 \u1099 \u1096 \u1077  \u1094 \u1077 \u1085 \u1072 .</p></div>\
            </div>\
            <div className="hotel-grid">\
              \{premiumHotels.map(h => (\
                <div key=\{h\} className="h-card">\
                  \{/* eslint-disable-next-line @next/next/no-img-element */\}\
                  <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=65" alt=\{h\} loading="lazy" />\
                  <div className="h-card-body">\
                    <div className="h-stars">\uc0\u9733 \u9733 \u9733 \u9733 \u9733 </div>\
                    <h3>\{h\}</h3>\
                    <p>\uc0\u1056 \u1086 \u1089 \u1082 \u1086 \u1096 \u1085 \u1099 \u1081  5\u9733  \u1086 \u1090 \u1077 \u1083 \u1100  \u1091 \u1088 \u1086 \u1074 \u1085 \u1103  \u1083 \u1102 \u1082 \u1089 . \u1055 \u1088 \u1080 \u1074 \u1072 \u1090 \u1085 \u1099 \u1081  \u1087 \u1083 \u1103 \u1078 , spa, \u1088 \u1077 \u1089 \u1090 \u1086 \u1088 \u1072 \u1085  \u1084 \u1080 \u1088 \u1086 \u1074 \u1086 \u1075 \u1086  \u1091 \u1088 \u1086 \u1074 \u1085 \u1103 .</p>\
                    <p className="h-price">\uc0\u55357 \u56492  \u1057 \u1090 \u1086 \u1080 \u1084 \u1086 \u1089 \u1090 \u1100  \u1087 \u1086  \u1079 \u1072 \u1087 \u1088 \u1086 \u1089 \u1091 </p>\
                    <button className="btn-primary" style=\{\{ padding:"7px 14px", fontSize:12, marginTop:8 \}\}\
                      onClick=\{() => onNav("contacts")\}>\uc0\u1059 \u1079 \u1085 \u1072 \u1090 \u1100  \u1089 \u1090 \u1086 \u1080 \u1084 \u1086 \u1089 \u1090 \u1100 </button>\
                  </div>\
                </div>\
              ))\}\
            </div>\
          </>\
        )\}\
\
        \{tab === 1 && (\
          <div className="hotel-grid">\
            \{topHotels.map(h => (\
              <div key=\{h\} className="h-card">\
                \{/* eslint-disable-next-line @next/next/no-img-element */\}\
                <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&q=65" alt=\{h\} loading="lazy" />\
                <div className="h-card-body">\
                  <div className="h-stars">\uc0\u9733 \u9733 \u9733 \u9733 \u9733 </div>\
                  <h3>\{h\}</h3>\
                  <p>\uc0\u1054 \u1090 \u1083 \u1080 \u1095 \u1085 \u1099 \u1081  5\u9733  \u1086 \u1090 \u1077 \u1083 \u1100 . \u1055 \u1083 \u1103 \u1078 , \u1073 \u1072 \u1089 \u1089 \u1077 \u1081 \u1085 \u1099 , \u1074 \u1089 \u1105  \u1074 \u1082 \u1083 \u1102 \u1095 \u1077 \u1085 \u1086 , \u1087 \u1088 \u1077 \u1082 \u1088 \u1072 \u1089 \u1085 \u1099 \u1081  \u1089 \u1077 \u1088 \u1074 \u1080 \u1089 .</p>\
                  <p className="h-price">\uc0\u55357 \u56492  \u1057 \u1090 \u1086 \u1080 \u1084 \u1086 \u1089 \u1090 \u1100  \u1087 \u1086  \u1079 \u1072 \u1087 \u1088 \u1086 \u1089 \u1091 </p>\
                  <button className="btn-primary" style=\{\{ padding:"7px 14px", fontSize:12, marginTop:8 \}\}\
                    onClick=\{() => onNav("contacts")\}>\uc0\u1059 \u1079 \u1085 \u1072 \u1090 \u1100  \u1089 \u1090 \u1086 \u1080 \u1084 \u1086 \u1089 \u1090 \u1100 </button>\
                </div>\
              </div>\
            ))\}\
          </div>\
        )\}\
\
        \{tab === 2 && (\
          <div className="info-grid">\
            \{([["\uc0\u55357 \u56501 ","\u1042 \u1072 \u1083 \u1102 \u1090 \u1072 ",info.currency],["\u55357 \u56803 \u65039 ","\u1071 \u1079 \u1099 \u1082 ",info.lang],["\u55357 \u56652 ","\u1056 \u1077 \u1083 \u1080 \u1075 \u1080 \u1103 ",info.religion],["\u9728 \u65039 ","\u1050 \u1083 \u1080 \u1084 \u1072 \u1090 ",info.climate],["\u9992 \u65039 ","\u1042 \u1080 \u1079 \u1072 ",info.visa]] as [string,string,string][]).map(([ic,n,v]) => (\
              <div key=\{n\} className="info-card"><h3>\{ic\} \{n\}</h3><p>\{v\}</p></div>\
            ))\}\
          </div>\
        )\}\
\
        \{tab === 3 && (\
          <div className="tips-list">\
            \{([["\uc0\u9728 \u65039 ","\u1046 \u1072 \u1088 \u1072  \u1083 \u1077 \u1090 \u1086 \u1084 ","\u1042 \u1089 \u1077 \u1075 \u1076 \u1072  \u1074 \u1086 \u1076 \u1072 , SPF50+, \u1075 \u1091 \u1083 \u1103 \u1081 \u1090 \u1077  \u1091 \u1090 \u1088 \u1086 \u1084  \u1080  \u1074 \u1077 \u1095 \u1077 \u1088 \u1086 \u1084 ."],["\u55357 \u56404 ","\u1044 \u1088 \u1077 \u1089 \u1089 -\u1082 \u1086 \u1076  \u1074  \u1058 \u1062 ","\u1047 \u1072 \u1082 \u1088 \u1099 \u1090 \u1099 \u1077  \u1087 \u1083 \u1077 \u1095 \u1080  \u1080  \u1082 \u1086 \u1083 \u1077 \u1085 \u1080  \u1086 \u1073 \u1103 \u1079 \u1072 \u1090 \u1077 \u1083 \u1100 \u1085 \u1099 ."],["\u55357 \u56967 ","\u1052 \u1077 \u1090 \u1088 \u1086  \u1080  \u1090 \u1072 \u1082 \u1089 \u1080 ","Careem/Uber \u1088 \u1072 \u1073 \u1086 \u1090 \u1072 \u1102 \u1090 . \u1052 \u1077 \u1090 \u1088 \u1086  \u1076 \u1077 \u1096 \u1077 \u1074 \u1083 \u1077  \u1090 \u1072 \u1082 \u1089 \u1080 ."],["\u55357 \u56499 ","\u1050 \u1072 \u1088 \u1090 \u1099  \u1074 \u1077 \u1079 \u1076 \u1077 ","\u1053 \u1072 \u1083 \u1080 \u1095 \u1085 \u1099 \u1077  \u1087 \u1086 \u1095 \u1090 \u1080  \u1085 \u1077  \u1085 \u1091 \u1078 \u1085 \u1099 . Visa/MC \u1087 \u1088 \u1080 \u1085 \u1080 \u1084 \u1072 \u1102 \u1090  \u1074 \u1077 \u1079 \u1076 \u1077 ."]] as [string,string,string][]).map(([ic,t,p]) => (\
              <div key=\{t\} className="tip-item"><span className="tip-ico">\{ic\}</span><div><h4>\{t\}</h4><p>\{p\}</p></div></div>\
            ))\}\
          </div>\
        )\}\
\
        \{tab === 4 && (\
          <div className="loc-grid">\
            \{([["\uc0\u55356 \u57305 \u65039 ","Burj Khalifa","830\u1084 , \u1089 \u1084 \u1086 \u1090 \u1088 \u1086 \u1074 \u1072 \u1103  \u1085 \u1072  124-\u1084  \u1101 \u1090 \u1072 \u1078 \u1077 . \u1041 \u1080 \u1083 \u1077 \u1090 \u1099  \u1073 \u1088 \u1086 \u1085 \u1080 \u1088 \u1086 \u1074 \u1072 \u1090 \u1100  \u1079 \u1072 \u1088 \u1072 \u1085 \u1077 \u1077 !"],["\u55357 \u57037 \u65039 ","Dubai Mall","\u1050 \u1088 \u1091 \u1087 \u1085 \u1077 \u1081 \u1096 \u1080 \u1081  \u1058 \u1056 \u1062  \u1084 \u1080 \u1088 \u1072 . \u1040 \u1082 \u1074 \u1072 \u1088 \u1080 \u1091 \u1084 , \u1082 \u1072 \u1090 \u1086 \u1082 , \u1082 \u1080 \u1085 \u1086 \u1090 \u1077 \u1072 \u1090 \u1088 ."],["\u55356 \u57308 \u65039 ","\u1057 \u1072 \u1092 \u1072 \u1088 \u1080  \u1074  \u1087 \u1091 \u1089 \u1090 \u1099 \u1085 \u1077 ","\u1044 \u1078 \u1080 \u1087 \u1099 , \u1091 \u1078 \u1080 \u1085  \u1087 \u1086 \u1076  \u1079 \u1074 \u1105 \u1079 \u1076 \u1072 \u1084 \u1080  \'97 must do \u1074  \u1044 \u1091 \u1073 \u1072 \u1077 ."],["\u55357 \u57042 ","Gold Souk","\u1044 \u1077 \u1096 \u1077 \u1074 \u1077 \u1081 \u1096 \u1077 \u1077  \u1079 \u1086 \u1083 \u1086 \u1090 \u1086  \u1074  \u1084 \u1080 \u1088 \u1077 ."]] as [string,string,string][]).map(([ic,n,desc]) => (\
              <div key=\{n\} className="loc-card"><span className="loc-ico">\{ic\}</span><div><h3>\{n\}</h3><p>\{desc\}</p></div></div>\
            ))\}\
          </div>\
        )\}\
\
        <div className="cta-banner">\
          <h3>\uc0\u9992 \u65039  \u1043 \u1086 \u1090 \u1086 \u1074 \u1099  \u1083 \u1077 \u1090 \u1077 \u1090 \u1100 ?</h3>\
          <p>\uc0\u1054 \u1089 \u1090 \u1072 \u1074 \u1100 \u1090 \u1077  \u1079 \u1072 \u1103 \u1074 \u1082 \u1091  \'97 \u1087 \u1086 \u1076 \u1073 \u1077 \u1088 \u1105 \u1084  \u1083 \u1091 \u1095 \u1096 \u1080 \u1081  \u1090 \u1091 \u1088  \u1080  \u1086 \u1090 \u1077 \u1083 \u1100 </p>\
          <div className="cta-btns">\
            <button className="btn-primary" onClick=\{() => onNav("contacts")\}>\uc0\u1054 \u1089 \u1090 \u1072 \u1074 \u1080 \u1090 \u1100  \u1079 \u1072 \u1103 \u1074 \u1082 \u1091 </button>\
            <a className="btn-outline" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer">\uc0\u55357 \u56492  Telegram</a>\
          </div>\
        </div>\
      </div>\
    </div>\
  );\
\}\
\
// \uc0\u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472  Cruise \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \
function CruisePage(\{ onNav \}: \{ onNav:(p:Page)=>void \}) \{\
  const cruiseRoutes = [\
    \{ img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=65", t:"\uc0\u55356 \u57098  \u1057 \u1088 \u1077 \u1076 \u1080 \u1079 \u1077 \u1084 \u1085 \u1086 \u1084 \u1086 \u1088 \u1100 \u1077 ", p:"\u1048 \u1089 \u1087 \u1072 \u1085 \u1080 \u1103 , \u1048 \u1090 \u1072 \u1083 \u1080 \u1103 , \u1043 \u1088 \u1077 \u1094 \u1080 \u1103 . 7-14 \u1085 \u1086 \u1095 \u1077 \u1081 .", price:"\u1086 \u1090  $599 / \u1095 \u1077 \u1083 ." \},\
    \{ img:"https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=500&q=65",   t:"\uc0\u55356 \u57309 \u65039  \u1050 \u1072 \u1088 \u1080 \u1073 \u1089 \u1082 \u1080 \u1077  \u1086 \u1089 \u1090 \u1088 \u1086 \u1074 \u1072 ",p:"\u1071 \u1084 \u1072 \u1081 \u1082 \u1072 , \u1041 \u1072 \u1088 \u1073 \u1072 \u1076 \u1086 \u1089 , \u1052 \u1077 \u1082 \u1089 \u1080 \u1082 \u1072 .",            price:"\u1086 \u1090  $699 / \u1095 \u1077 \u1083 ." \},\
    \{ img:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&q=65", t:"\uc0\u55358 \u56778  \u1053 \u1086 \u1088 \u1074 \u1077 \u1078 \u1089 \u1082 \u1080 \u1077  \u1092 \u1100 \u1086 \u1088 \u1076 \u1099 ",p:"\u1057 \u1077 \u1074 \u1077 \u1088 \u1085 \u1086 \u1077  \u1089 \u1080 \u1103 \u1085 \u1080 \u1077 , \u1072 \u1081 \u1089 \u1073 \u1077 \u1088 \u1075 \u1080 .",             price:"\u1086 \u1090  $899 / \u1095 \u1077 \u1083 ." \},\
    \{ img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=65",    t:"\uc0\u55356 \u56806 \u55356 \u56810  \u1054 \u1040 \u1069  \u1080  \u1040 \u1088 \u1072 \u1074 \u1080 \u1103 ",   p:"\u1044 \u1091 \u1073 \u1072 \u1081 , \u1040 \u1073 \u1091 -\u1044 \u1072 \u1073 \u1080 , \u1054 \u1084 \u1072 \u1085 .",                 price:"\u1086 \u1090  $499 / \u1095 \u1077 \u1083 ." \},\
  ];\
  const myths = [\
    \{ x:"\uc0\u55357 \u56994 \u55357 \u56485 ", type:"false", title:"\'ab\u1050 \u1086 \u1088 \u1072 \u1073 \u1083 \u1100  \u1084 \u1086 \u1078 \u1077 \u1090  \u1091 \u1090 \u1086 \u1085 \u1091 \u1090 \u1100 \'bb",   p:"\u1057 \u1086 \u1074 \u1088 \u1077 \u1084 \u1077 \u1085 \u1085 \u1099 \u1077  \u1083 \u1072 \u1081 \u1085 \u1077 \u1088 \u1099  \'97 \u1089 \u1072 \u1084 \u1099 \u1077  \u1073 \u1077 \u1079 \u1086 \u1087 \u1072 \u1089 \u1085 \u1099 \u1077  \u1089 \u1091 \u1076 \u1072 . 27 \u1091 \u1088 \u1086 \u1074 \u1085 \u1077 \u1081  \u1079 \u1072 \u1097 \u1080 \u1090 \u1099 ." \},\
    \{ x:"\uc0\u55357 \u56436 ",   type:"false", title:"\'ab\u1050 \u1088 \u1091 \u1080 \u1079  \u1076 \u1083 \u1103  \u1087 \u1077 \u1085 \u1089 \u1080 \u1086 \u1085 \u1077 \u1088 \u1086 \u1074 \'bb",    p:"Norwegian, MSC \'97 \u1085 \u1086 \u1095 \u1085 \u1099 \u1077  \u1082 \u1083 \u1091 \u1073 \u1099 , \u1072 \u1082 \u1074 \u1072 \u1087 \u1072 \u1088 \u1082 \u1080 , \u1082 \u1072 \u1079 \u1080 \u1085 \u1086  \u1085 \u1072  \u1073 \u1086 \u1088 \u1090 \u1091 ." \},\
    \{ x:"\uc0\u55357 \u56504 ",   type:"false", title:"\'ab\u1050 \u1088 \u1091 \u1080 \u1079  \u1086 \u1095 \u1077 \u1085 \u1100  \u1076 \u1086 \u1088 \u1086 \u1075 \u1086 \u1081 \'bb",      p:"\u1057 \u1088 \u1077 \u1076 \u1080 \u1079 \u1077 \u1084 \u1085 \u1086 \u1084 \u1086 \u1088 \u1100 \u1077  7 \u1085 \u1086 \u1095 \u1077 \u1081  \u1086 \u1090  $599 \'97 \u1087 \u1088 \u1086 \u1078 \u1080 \u1074 \u1072 \u1085 \u1080 \u1077  \u1080  5 \u1089 \u1090 \u1088 \u1072 \u1085 ." \},\
    \{ x:"\uc0\u55356 \u57172 ",   type:"true",  title:"\'ab\u1053 \u1072  \u1082 \u1088 \u1091 \u1080 \u1079 \u1077  \u1074 \u1082 \u1091 \u1089 \u1085 \u1086  \u1082 \u1086 \u1088 \u1084 \u1103 \u1090 \'bb",  p:"\u1047 \u1072 \u1074 \u1090 \u1088 \u1072 \u1082 -\u1086 \u1073 \u1077 \u1076 -\u1091 \u1078 \u1080 \u1085  24/7 \u1074 \u1082 \u1083 \u1102 \u1095 \u1077 \u1085 \u1099 . \u1051 \u1102 \u1076 \u1080  \u1085 \u1072 \u1073 \u1080 \u1088 \u1072 \u1102 \u1090  2-3 \u1082 \u1075  \u1079 \u1072  \u1082 \u1088 \u1091 \u1080 \u1079  \u55357 \u56836 " \},\
  ];\
  return (\
    <div style=\{\{ paddingTop:60 \}\}>\
      <div className="cruise-hero-page">\
        <div className="site-container">\
          <div className="cruise-badges">\
            \{["\uc0\u55356 \u57098  \u1057 \u1088 \u1077 \u1076 \u1080 \u1079 \u1077 \u1084 \u1085 \u1086 \u1084 \u1086 \u1088 \u1100 \u1077 ","\u55356 \u57309 \u65039  \u1050 \u1072 \u1088 \u1080 \u1073 \u1099 ","\u55358 \u56778  \u1053 \u1086 \u1088 \u1074 \u1077 \u1075 \u1080 \u1103 ","\u55357 \u56826 \u65039  \u1050 \u1088 \u1091 \u1075 \u1086 \u1089 \u1074 \u1077 \u1090 \u1082 \u1072 "].map(b => <span key=\{b\} className="cruise-badge">\{b\}</span>)\}\
          </div>\
          <h1>\uc0\u55357 \u56994  \u1050 \u1088 \u1091 \u1080 \u1079 \u1099  \u1087 \u1086  \u1074 \u1089 \u1077 \u1084 \u1091  \u1084 \u1080 \u1088 \u1091 </h1>\
          <p>27 \uc0\u1084 \u1080 \u1083 \u1083 \u1080 \u1086 \u1085 \u1086 \u1074  \u1095 \u1077 \u1083 \u1086 \u1074 \u1077 \u1082  \u1082 \u1072 \u1078 \u1076 \u1099 \u1081  \u1075 \u1086 \u1076  \u1074 \u1099 \u1073 \u1080 \u1088 \u1072 \u1102 \u1090  \u1082 \u1088 \u1091 \u1080 \u1079 \u1099 . \u1055 \u1086 \u1082 \u1072  \u1074 \u1099  \u1095 \u1080 \u1090 \u1072 \u1077 \u1090 \u1077  \'97 400 000 \u1087 \u1083 \u1099 \u1074 \u1091 \u1090  \u1085 \u1072  \u1087 \u1083 \u1072 \u1074 \u1091 \u1095 \u1080 \u1093  \u1086 \u1090 \u1077 \u1083 \u1103 \u1093  \u1089  \u1074 \u1080 \u1076 \u1086 \u1084  \u1085 \u1072  \u1079 \u1072 \u1082 \u1072 \u1090 .</p>\
          <button className="btn-primary" onClick=\{() => onNav("contacts")\}>\uc0\u1047 \u1072 \u1073 \u1088 \u1086 \u1085 \u1080 \u1088 \u1086 \u1074 \u1072 \u1090 \u1100  \u1082 \u1088 \u1091 \u1080 \u1079  \u8594 </button>\
        </div>\
      </div>\
\
      <div className="site-container" style=\{\{ padding:"44px 20px 60px" \}\}>\
        <div className="fomo-box">\
          <span className="fi">\uc0\u9889 </span>\
          <div><h3>\uc0\u1042 \u1099  \u1090 \u1077 \u1088 \u1103 \u1077 \u1090 \u1077  \u1083 \u1091 \u1095 \u1096 \u1080 \u1077  \u1075 \u1086 \u1076 \u1099  \u1073 \u1077 \u1079  \u1082 \u1088 \u1091 \u1080 \u1079 \u1086 \u1074 </h3><p>\u1057 \u1088 \u1077 \u1076 \u1085 \u1080 \u1081  \u1074 \u1086 \u1079 \u1088 \u1072 \u1089 \u1090  \u1082 \u1088 \u1091 \u1080 \u1079 \u1085 \u1086 \u1075 \u1086  \u1087 \u1072 \u1089 \u1089 \u1072 \u1078 \u1080 \u1088 \u1072  \'97 <strong>46 \u1083 \u1077 \u1090 </strong>. \u1053 \u1072  \u1084 \u1086 \u1083 \u1086 \u1076 \u1105 \u1078 \u1085 \u1099 \u1093  \u1082 \u1088 \u1091 \u1080 \u1079 \u1072 \u1093  MSC \'97 <strong>28 \u1083 \u1077 \u1090 </strong>.</p></div>\
        </div>\
\
        <span className="section-tag">\uc0\u1056 \u1072 \u1079 \u1088 \u1091 \u1096 \u1072 \u1077 \u1084  \u1084 \u1080 \u1092 \u1099 </span>\
        <h2 className="section-title">\'ab\uc0\u1071  \u1076 \u1091 \u1084 \u1072 \u1083 , \u1082 \u1088 \u1091 \u1080 \u1079  \'97 \u1101 \u1090 \u1086  \u1082 \u1072 \u1082  \u1058 \u1080 \u1090 \u1072 \u1085 \u1080 \u1082 \'bb</h2>\
        <div className="myth-grid">\
          \{myths.map(m => (\
            <div key=\{m.title\} className="myth-card">\
              <div className="mx">\{m.x\}</div>\
              <div className=\{`myth-label $\{m.type\}`\}>\{m.type==="true" ? "\uc0\u1060 \u1040 \u1050 \u1058  \u10003 " : "\u1052 \u1048 \u1060 "\}</div>\
              <h3>\{m.title\}</h3>\
              <p>\{m.p\}</p>\
            </div>\
          ))\}\
        </div>\
\
        <div style=\{\{ marginTop:40 \}\}>\
          <span className="section-tag">\uc0\u1052 \u1072 \u1088 \u1096 \u1088 \u1091 \u1090 \u1099 </span>\
          <h2 className="section-title">\uc0\u1050 \u1091 \u1076 \u1072  \u1087 \u1083 \u1099 \u1090 \u1100 ?</h2>\
          <div className="cruise-type-grid">\
            \{cruiseRoutes.map(r => (\
              <div key=\{r.t\} className="ct-card">\
                \{/* eslint-disable-next-line @next/next/no-img-element */\}\
                <img src=\{r.img\} alt=\{r.t\} loading="lazy" />\
                <div className="ct-body"><h3>\{r.t\}</h3><p>\{r.p\}</p><p className="ct-price">\{r.price\}</p></div>\
              </div>\
            ))\}\
          </div>\
        </div>\
\
        <div className="cta-banner">\
          <h3>\uc0\u55357 \u56994  \u1043 \u1086 \u1090 \u1086 \u1074 \u1099  \u1074 \u1099 \u1081 \u1090 \u1080  \u1074  \u1084 \u1086 \u1088 \u1077 ?</h3>\
          <p>\uc0\u1041 \u1086 \u1083 \u1077 \u1077  300 \u1082 \u1083 \u1080 \u1077 \u1085 \u1090 \u1086 \u1074  \u1080 \u1079  \u1058 \u1072 \u1096 \u1082 \u1077 \u1085 \u1090 \u1072  \u1091 \u1078 \u1077  \u1087 \u1083 \u1072 \u1074 \u1072 \u1083 \u1080  \u1089  \u1085 \u1072 \u1084 \u1080 .</p>\
          <div className="cta-btns">\
            <button className="btn-primary" onClick=\{() => onNav("contacts")\}>\uc0\u1047 \u1072 \u1073 \u1088 \u1086 \u1085 \u1080 \u1088 \u1086 \u1074 \u1072 \u1090 \u1100  \u1082 \u1088 \u1091 \u1080 \u1079 </button>\
            <a className="btn-outline" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer">\uc0\u55357 \u56492  Telegram</a>\
          </div>\
        </div>\
      </div>\
    </div>\
  );\
\}\
\
// \uc0\u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472  Videos \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \
function VideosPage() \{\
  return (\
    <div style=\{\{ paddingTop:60 \}\}>\
      <div style=\{\{ background:"linear-gradient(135deg,#0d1b2a,#1a2b3c)", padding:"48px 0", textAlign:"center" \}\}>\
        <div className="site-container">\
          <span className="section-tag" style=\{\{ color:"#ffd166" \}\}>\uc0\u1042 \u1080 \u1076 \u1077 \u1086 \u1086 \u1073 \u1079 \u1086 \u1088 \u1099 </span>\
          <h1 style=\{\{ color:"#fff", fontSize:"clamp(1.6rem,4vw,2.4rem)", fontWeight:900, margin:"6px 0 8px" \}\}>\
            \uc0\u55356 \u57260  \u1042 \u1080 \u1076 \u1077 \u1086 \u1086 \u1073 \u1079 \u1086 \u1088 \u1099  \u1086 \u1090 \u1077 \u1083 \u1077 \u1081  \u1080  \u1085 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1081 \
          </h1>\
          <p style=\{\{ color:"rgba(255,255,255,0.68)", fontSize:14, maxWidth:480, margin:"0 auto" \}\}>\
            \uc0\u1053 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1077  \u8594  \u1043 \u1086 \u1088 \u1086 \u1076  \u8594  \u1050 \u1072 \u1090 \u1077 \u1075 \u1086 \u1088 \u1080 \u1103  \u8594  \u1042 \u1080 \u1076 \u1077 \u1086 \u1086 \u1073 \u1079 \u1086 \u1088 \
          </p>\
        </div>\
      </div>\
      <div className="site-container" style=\{\{ padding:"60px 20px", textAlign:"center" \}\}>\
        <div style=\{\{ fontSize:60, marginBottom:16 \}\}>\uc0\u55356 \u57260 </div>\
        <h2 style=\{\{ fontSize:20, fontWeight:700, marginBottom:8 \}\}>\uc0\u1042 \u1080 \u1076 \u1077 \u1086 \u1086 \u1073 \u1079 \u1086 \u1088 \u1099  \u1089 \u1082 \u1086 \u1088 \u1086  \u1087 \u1086 \u1103 \u1074 \u1103 \u1090 \u1089 \u1103 </h2>\
        <p style=\{\{ color:"#64748b", fontSize:13, maxWidth:360, margin:"0 auto 24px", lineHeight:1.6 \}\}>\
          \uc0\u1052 \u1099  \u1075 \u1086 \u1090 \u1086 \u1074 \u1080 \u1084  \u1074 \u1080 \u1076 \u1077 \u1086 \u1086 \u1073 \u1079 \u1086 \u1088 \u1099  \u1085 \u1072 \u1096 \u1080 \u1093  \u1085 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1081 . \u1055 \u1086 \u1076 \u1087 \u1080 \u1096 \u1080 \u1090 \u1077 \u1089 \u1100  \u1095 \u1090 \u1086 \u1073 \u1099  \u1085 \u1077  \u1087 \u1088 \u1086 \u1087 \u1091 \u1089 \u1090 \u1080 \u1090 \u1100 !\
        </p>\
        <div style=\{\{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" \}\}>\
          <a className="soc-btn" href="https://www.instagram.com/tury_tashkent/" target="_blank" rel="noopener noreferrer" style=\{\{ background:"#e1306c" \}\}>\uc0\u55357 \u56568  Instagram</a>\
          <a className="soc-btn" href="https://t.me/tury_iz_tashkenta" target="_blank" rel="noopener noreferrer" style=\{\{ background:"#2ca5e0" \}\}>\uc0\u9992 \u65039  Telegram</a>\
        </div>\
      </div>\
    </div>\
  );\
\}\
\
// \uc0\u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472  Contacts \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \
function ContactsPage() \{\
  const [sent, setSent] = useState(false);\
  const contactItems: [string,string,string,string|undefined,string][] = [\
    ["\uc0\u55357 \u56542 ","rgba(255,107,53,0.1)","\u1058 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085 ","tel:+998771618888","+998 77 161 88 88"],\
    ["\uc0\u9993 \u65039 ","rgba(33,150,243,0.1)","Email","mailto:uz@panteraluxe.travel","uz@panteraluxe.travel"],\
    ["\uc0\u55357 \u56525 ","rgba(6,182,212,0.1)","\u1054 \u1092 \u1080 \u1089 ",undefined,"\u1058 \u1072 \u1096 \u1082 \u1077 \u1085 \u1090 , \u1040 \u1084 \u1080 \u1088  \u1058 \u1077 \u1084 \u1091 \u1088  99\u1072 "],\
    ["\uc0\u9200 ","rgba(34,197,94,0.1)","\u1056 \u1077 \u1078 \u1080 \u1084  \u1088 \u1072 \u1073 \u1086 \u1090 \u1099 ",undefined,"10:00 \'96 21:00, \u1077 \u1078 \u1077 \u1076 \u1085 \u1077 \u1074 \u1085 \u1086 "],\
  ];\
  return (\
    <div style=\{\{ paddingTop:60 \}\}>\
      <div className="contacts-hero">\
        <div className="site-container"><h1>\uc0\u1050 \u1086 \u1085 \u1090 \u1072 \u1082 \u1090 \u1099 </h1><p>\u1057 \u1074 \u1103 \u1078 \u1080 \u1090 \u1077 \u1089 \u1100  \u1089  \u1085 \u1072 \u1084 \u1080  \'97 \u1086 \u1090 \u1074 \u1077 \u1090 \u1080 \u1084  \u1074  \u1090 \u1077 \u1095 \u1077 \u1085 \u1080 \u1077  15 \u1084 \u1080 \u1085 \u1091 \u1090 </p></div>\
      </div>\
      <div className="site-container">\
        <div className="contacts-grid">\
          <div style=\{\{ paddingTop:36 \}\}>\
            \{contactItems.map(([ico,bg,label,href,val]) => (\
              <div key=\{label\} className="c-item">\
                <div className="c-ico" style=\{\{ background:bg \}\}>\{ico\}</div>\
                <div><h4>\{label\}</h4>\{href ? <a href=\{href\}>\{val\}</a> : <p>\{val\}</p>\}</div>\
              </div>\
            ))\}\
            <div className="soc-links">\
              <a className="soc-btn" href="https://www.instagram.com/tury_tashkent/"  target="_blank" rel="noopener noreferrer" style=\{\{ background:"#e1306c" \}\}>\uc0\u55357 \u56568  Instagram</a>\
              <a className="soc-btn" href="https://t.me/tury_iz_tashkenta"            target="_blank" rel="noopener noreferrer" style=\{\{ background:"#2ca5e0" \}\}>\uc0\u9992 \u65039  \u1043 \u1086 \u1088 \u1103 \u1097 \u1080 \u1077  \u1090 \u1091 \u1088 \u1099 </a>\
              <a className="soc-btn" href="https://t.me/vilet_support"                target="_blank" rel="noopener noreferrer" style=\{\{ background:"#2ca5e0" \}\}>\uc0\u55357 \u56492  \u1053 \u1072 \u1087 \u1080 \u1089 \u1072 \u1090 \u1100 </a>\
            </div>\
          </div>\
\
          <div className="c-form" style=\{\{ margin:"28px 0" \}\}>\
            \{sent ? (\
              <div style=\{\{ textAlign:"center", padding:"40px 0" \}\}>\
                <div style=\{\{ fontSize:48, marginBottom:10 \}\}>\uc0\u9989 </div>\
                <h3 style=\{\{ fontSize:18, fontWeight:700, marginBottom:6 \}\}>\uc0\u1047 \u1072 \u1103 \u1074 \u1082 \u1072  \u1086 \u1090 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1072 !</h3>\
                <p style=\{\{ color:"#64748b", fontSize:13, marginBottom:16 \}\}>\uc0\u1052 \u1077 \u1085 \u1077 \u1076 \u1078 \u1077 \u1088  \u1089 \u1074 \u1103 \u1078 \u1077 \u1090 \u1089 \u1103  \u1074  \u1090 \u1077 \u1095 \u1077 \u1085 \u1080 \u1077  15 \u1084 \u1080 \u1085 \u1091 \u1090 .</p>\
                <a className="btn-primary" href="https://t.me/vilet_support" target="_blank" rel="noopener noreferrer">\uc0\u55357 \u56492  \u1053 \u1072 \u1087 \u1080 \u1089 \u1072 \u1090 \u1100  \u1074  Telegram</a>\
              </div>\
            ) : (\
              <>\
                <h3>\uc0\u1054 \u1089 \u1090 \u1072 \u1074 \u1080 \u1090 \u1100  \u1079 \u1072 \u1103 \u1074 \u1082 \u1091 </h3>\
                <div className="fg"><label>\uc0\u1048 \u1084 \u1103 </label><input type="text" placeholder="\u1042 \u1072 \u1096 \u1077  \u1080 \u1084 \u1103 " autoComplete="name" /></div>\
                <div className="fg"><label>\uc0\u1058 \u1077 \u1083 \u1077 \u1092 \u1086 \u1085  / WhatsApp</label><input type="tel" placeholder="+998 __ ___" autoComplete="tel" /></div>\
                <div className="fg">\
                  <label>\uc0\u1053 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1077 </label>\
                  <select>\
                    <option>\uc0\u1042 \u1099 \u1073 \u1077 \u1088 \u1080 \u1090 \u1077 </option>\
                    \{["\uc0\u1044 \u1091 \u1073 \u1072 \u1081 ","\u1064 \u1072 \u1088 \u1084  \u1069 \u1083 \u1100  \u1064 \u1077 \u1081 \u1093 ","\u1058 \u1091 \u1088 \u1094 \u1080 \u1103 ","\u1052 \u1072 \u1083 \u1100 \u1076 \u1080 \u1074 \u1099 ","\u1058 \u1072 \u1080 \u1083 \u1072 \u1085 \u1076 ","\u1050 \u1088 \u1091 \u1080 \u1079 ","\u1044 \u1088 \u1091 \u1075 \u1086 \u1077 "].map(o => <option key=\{o\}>\{o\}</option>)\}\
                  </select>\
                </div>\
                <div className="fg"><label>\uc0\u1057 \u1086 \u1086 \u1073 \u1097 \u1077 \u1085 \u1080 \u1077 </label><textarea rows=\{3\} placeholder="\u1055 \u1086 \u1078 \u1077 \u1083 \u1072 \u1085 \u1080 \u1103 ..." /></div>\
                <button className="btn-primary" style=\{\{ width:"100%", padding:13 \}\} onClick=\{() => setSent(true)\}>\
                  \uc0\u1054 \u1090 \u1087 \u1088 \u1072 \u1074 \u1080 \u1090 \u1100  \u1079 \u1072 \u1103 \u1074 \u1082 \u1091 \
                </button>\
              </>\
            )\}\
          </div>\
        </div>\
      </div>\
    </div>\
  );\
\}\
\
// \uc0\u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472  Footer \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \
function Footer(\{ onNav, onDest \}: \{ onNav:(p:Page)=>void; onDest:(k:string)=>void \}) \{\
  return (\
    <footer>\
      <div className="footer-inner">\
        <div className="footer-grid">\
          <div className="f-brand">\
            <div className="f-logo">\
              \{/* eslint-disable-next-line @next/next/no-img-element */\}\
              <img src=\{LOGO\} alt="PANTERA LUXE" width=\{38\} height=\{38\} loading="lazy" />\
              <span>PANTERA LUXE</span>\
            </div>\
            <p>\uc0\u1058 \u1091 \u1088 \u1080 \u1089 \u1090 \u1080 \u1095 \u1077 \u1089 \u1082 \u1086 \u1077  \u1072 \u1075 \u1077 \u1085 \u1090 \u1089 \u1090 \u1074 \u1086  \u1074  \u1058 \u1072 \u1096 \u1082 \u1077 \u1085 \u1090 \u1077 . 10 \u1083 \u1077 \u1090 , 5000+ \u1090 \u1091 \u1088 \u1080 \u1089 \u1090 \u1086 \u1074 .</p>\
            <p style=\{\{ marginTop:8 \}\}>\uc0\u55357 \u56525  \u1058 \u1072 \u1096 \u1082 \u1077 \u1085 \u1090 , \u1040 \u1084 \u1080 \u1088  \u1058 \u1077 \u1084 \u1091 \u1088  99\u1072  \'b7 \u9200  10:00\'9621:00</p>\
          </div>\
          <div className="f-col">\
            <h4>\uc0\u1053 \u1072 \u1087 \u1088 \u1072 \u1074 \u1083 \u1077 \u1085 \u1080 \u1103 </h4>\
            <ul>\
              \{(["dubai","sharm","turkey","maldives"] as const).map(k => (\
                <li key=\{k\}><button onClick=\{() => onDest(k)\}>\
                  \{k==="dubai"?"\uc0\u1044 \u1091 \u1073 \u1072 \u1081 ":k==="sharm"?"\u1064 \u1072 \u1088 \u1084  \u1069 \u1083 \u1100  \u1064 \u1077 \u1081 \u1093 ":k==="turkey"?"\u1058 \u1091 \u1088 \u1094 \u1080 \u1103 ":"\u1052 \u1072 \u1083 \u1100 \u1076 \u1080 \u1074 \u1099 "\}\
                </button></li>\
              ))\}\
              <li><button onClick=\{() => onNav("cruise")\}>\uc0\u55357 \u56994  \u1050 \u1088 \u1091 \u1080 \u1079 \u1099 </button></li>\
            </ul>\
          </div>\
          <div className="f-col">\
            <h4>\uc0\u1050 \u1086 \u1085 \u1090 \u1072 \u1082 \u1090 \u1099 </h4>\
            <ul>\
              <li><a href="tel:+998771618888">+998 77 161 88 88</a></li>\
              <li><a href="https://t.me/vilet_support"                target="_blank" rel="noopener noreferrer">Telegram</a></li>\
              <li><a href="https://www.instagram.com/tury_tashkent/"  target="_blank" rel="noopener noreferrer">Instagram</a></li>\
              <li><a href="https://t.me/tury_iz_tashkenta"            target="_blank" rel="noopener noreferrer">\uc0\u1043 \u1086 \u1088 \u1103 \u1097 \u1080 \u1077  \u1090 \u1091 \u1088 \u1099 </a></li>\
            </ul>\
          </div>\
        </div>\
        <div className="f-bottom">\
          <p>\'a9 2025 PANTERA LUXE. \uc0\u1042 \u1089 \u1077  \u1087 \u1088 \u1072 \u1074 \u1072  \u1079 \u1072 \u1097 \u1080 \u1097 \u1077 \u1085 \u1099 .</p>\
          <p>\uc0\u55356 \u57101  \u1058 \u1091 \u1088 \u1099  \u1080 \u1079  \u1058 \u1072 \u1096 \u1082 \u1077 \u1085 \u1090 \u1072 , \u1059 \u1079 \u1073 \u1077 \u1082 \u1080 \u1089 \u1090 \u1072 \u1085 </p>\
        </div>\
      </div>\
    </footer>\
  );\
\}\
\
// \uc0\u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472  Root \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \u9472 \
export default function Home() \{\
  const [page,    setPage]    = useState<Page>("home");\
  const [destKey, setDestKey] = useState("dubai");\
  const [mob,     setMob]     = useState(false);\
  const [showTop, setShowTop] = useState(false);\
\
  const nav = useCallback((p: Page) => \{\
    setPage(p); setMob(false); window.scrollTo(\{ top:0, behavior:"smooth" \});\
  \}, []);\
\
  const openDest = useCallback((k: string) => \{\
    setDestKey(k); setPage("dest"); window.scrollTo(\{ top:0, behavior:"smooth" \});\
  \}, []);\
\
  useEffect(() => \{\
    const fn = () => setShowTop(window.scrollY > 400);\
    window.addEventListener("scroll", fn, \{ passive:true \});\
    return () => window.removeEventListener("scroll", fn);\
  \}, []);\
\
  return (\
    <>\
      <Nav page=\{page\} onNav=\{nav\} mob=\{mob\} onMob=\{() => setMob(v => !v)\} />\
\
      <main>\
        \{page === "home"       && <HomePage       onNav=\{nav\} onDest=\{openDest\} />\}\
        \{page === "directions" && <DirectionsPage onDest=\{openDest\} onNav=\{nav\} />\}\
        \{page === "dest"       && <DestPage       destKey=\{destKey\} onBack=\{() => nav("directions")\} onNav=\{nav\} />\}\
        \{page === "cruise"     && <CruisePage     onNav=\{nav\} />\}\
        \{page === "videos"     && <VideosPage />\}\
        \{page === "contacts"   && <ContactsPage />\}\
      </main>\
\
      <Footer onNav=\{nav\} onDest=\{openDest\} />\
\
      \{/* Floating buttons */\}\
      <div className="float-w">\
        \{([\
          ["https://t.me/vilet_support",                              "#2ca5e0",                                          "\uc0\u9992 \u65039 ","Telegram"  ],\
          ["https://wa.me/998771618888",                              "#25d366",                                          "\uc0\u55357 \u56492 ","WhatsApp"  ],\
          ["https://www.instagram.com/tury_tashkent/",               "linear-gradient(135deg,#f09433,#dc2743,#bc1888)",  "\uc0\u55357 \u56568 ","Instagram" ],\
        ] as [string,string,string,string][]).map(([href,bg,ico,lbl]) => (\
          <a key=\{lbl\} className="f-btn" href=\{href\} target="_blank" rel="noopener noreferrer" style=\{\{ background:bg \}\}>\
            <span className="f-ico">\{ico\}</span>\
            <span className="f-lbl">\{lbl\}</span>\
          </a>\
        ))\}\
      </div>\
\
      \{showTop && (\
        <button className="scroll-top" onClick=\{() => window.scrollTo(\{ top:0, behavior:"smooth" \})\}>\uc0\u8593 </button>\
      )\}\
    </>\
  );\
\}\
}