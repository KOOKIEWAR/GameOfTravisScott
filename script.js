const song = [
    //OWL PHARAOH
    {title: "Meadow Creek",link: "https://youtu.be/06CnOUhweLo?si=ulIdqof9bZXBWLvT",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    {title: "Bad Mood / Shit on You",link: "https://youtu.be/vabDcge2w4o?si=3APera5N0xCmqWd_",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    {title: "Upper Echelon",link: "https://youtu.be/fsmb7fHdwCU?si=CL7cbJEwM1KL0-oZ",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    {title: "Chaz Interlude",link: "https://youtu.be/bdqMuKmanTY?si=d-PGm-4x7JdZO3z9",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    {title: "Uptown",link: "https://youtu.be/DdouvPcmEco?si=dysD-V0ReofttgRa",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    {title: "Hell of a Night",link: "https://youtu.be/8XdlQmYpVzU?si=6lnOgy0hussnLrNC",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    {title: "Blocka La Flame",link: "https://youtu.be/r7ETN6myD3M?si=1oMhsH5ZqDNt3muk",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    {title: "Naked",link: "https://youtu.be/1ncDy2-A53g?si=WA3o6vqeMnOE6i0E",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    {title: "Dance on the Moon",link: "https://youtu.be/-TwGwJp3rs8?si=8KuWNTzMpXEDsPnI",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    {title: "MIA",link: "https://youtu.be/2zVwCHRX7_Y?si=K8GO-e5oYPOtqhPP",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    {title: "Drive",link: "https://youtu.be/cknR8xNFop8?si=YhR37sC4VlXG-0M5",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    {title: "Quintana",link: "https://youtu.be/QPS-MCe75JE?si=VI-KmDrFJL-a2BZm",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    {title: "16 Chapels",link: "https://youtu.be/UiI0YXBQS_A?si=DpvkgfwocsjHV2GW",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    {title: "Bandz",link: "https://youtu.be/OB_3gSmPQto?si=TjiNuGJcGKeCWiX3",cover:"https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"},
    //DAYS BEFORE RODEO
    {title: "The Prayer",link: "https://youtu.be/Ew9L6nAKMis?si=cO1o4NmaSXQv5_Vv",cover:"https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"},
    {title: "Mamacita",link: "https://youtu.be/hOMvQMJeRg8?si=V7zbBgTvs7rLkggy",cover:"https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"},
    {title: "Quintana Pt. 2",link: "https://youtu.be/eK53csUvAVk?si=_tG_SgcHqOTXhWIG",cover:"https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"},
    {title: "Drugs You Should Try It",link: "https://youtu.be/FDOfSg__bmk?si=QkfXfGeb8I5e15oa",cover:"https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"},
    {title: "Don't Play",link: "https://youtu.be/lr2EHiv0c3M?si=OTjKjtwidCylgUmX",cover:"https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"},
    {title: "Skyfall",link: "https://youtu.be/TGePZWBkmeE?si=S_zJ1bIQ_PMt4LMK",cover:"https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"},
    {title: "Zombies",link: "https://youtu.be/7bkCosOjOlI?si=8VZ5d2PmmxmVopk7",cover:"https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"},
    {title: "Sloppy Toppy",link: "https://youtu.be/5MJCkpb1CDQ?si=y9LPkrXRYr2YseUO",cover:"https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"},
    {title: "Basement Freestyle",link: "https://youtu.be/R95EoZEHK7I?si=fVMRaYipZxPBn3tB",cover:"https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"},
    {title: "Backyard",link: "https://youtu.be/K-UReBpZ4gA?si=Df6-4qdyDZMjG5TY",cover:"https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"},
    {title: "Grey",link: "https://youtu.be/3S9Nbw_qKrI?si=PGWaGJmrh4G_Sb9q",cover:"https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"},
    {title: "BACC (Bonus)",link: "https://youtu.be/F67AThJbbYQ?si=yM26CyHXcp4_62-L",cover:"https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"},
    //RODEO
    {title: "Pornography",link: "https://youtu.be/NCUGupIhRvk?si=vQZu4ihOo91wlVrm",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"},    
    {title: "Oh My Dis Side",link: "https://youtu.be/XV4u5cvLkKs?si=y1HeVagYqOcvgQSu",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"},    
    {title: "3500",link: "https://youtu.be/3qNaoLgHU94?si=suQ-tzCk1cqykfVH",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"},
    {title: "Wasted",link: "https://youtu.be/0BGT0mgcj0o?si=gu2R7HG0VQfU_7ZU",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"}, 
    {title: "90210",link: "https://youtu.be/h35g2e9aIIk?si=vtmXra7OZ48Rw7ql",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"}, 
    {title: "Pray 4 Love",link: "https://youtu.be/mH9YyB-l4iM?si=O1fcpb6OJleJDpW6",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"}, 
    {title: "Nightcrawler",link: "https://youtu.be/JPY6lQjokYs?si=-okgkBiPMT2rYsXB",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"}, 
    {title: "Piss On Your Grave",link: "https://youtu.be/KCsex2tGXrs?si=XXm2lLZVZAsKJbh_",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"}, 
    {title: "Antidote",link: "https://youtu.be/yA6W2pOi3XY?si=nantJHqsaz183PQu",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"}, 
    {title: "Impossible",link: "https://youtu.be/fLMB6-AHTXI?si=GQSJH6cx9gJM6ln4",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"}, 
    {title: "Maria I'm Drunk",link: "https://youtu.be/fI-mnYR-Mp8?si=naTzRKVFanXE4R_I",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"}, 
    {title: "Flying High",link: "https://youtu.be/OdXNvCOAs0w?si=b5T_7GMQynvoEmLU",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"}, 
    {title: "I Can Tell",link: "https://youtu.be/XtPO2PLZ3tk?si=4U3_y4qIIrviVpKd",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"}, 
    {title: "Apple Pie",link: "https://youtu.be/cLx87ceoNT8?si=aUnziXeLglCuURJx",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"}, 
    {title: "Ok Alright",link: "https://youtu.be/WFYpz-QhOgk?si=002UMwz5IaARdJse",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"}, 
    {title: "Never Catch Me",link: "https://youtu.be/EgPRheesCnY?si=tl3n4x0boInbSfO1",cover:"https://m.media-amazon.com/images/I/81UIqmn17WL._UF1000,1000_QL80_.jpg"},
    //DAYS BEFORE BIRDS
    {title: "Black Mass",link: "https://youtu.be/QHOmEkjWAOU?si=6gPN9u2OjWDgBOaG",cover:"https://i1.sndcdn.com/artworks-000502190916-l6fxn9-t500x500.jpg"},  
    {title: "Fish N Grits",link: "https://youtu.be/1kH0G7nL0LE?si=IPQ5ImwIPOuC5J0u",cover:"https://i1.sndcdn.com/artworks-000502190916-l6fxn9-t500x500.jpg"}, 
    {title: "Hot Sauce",link: "otherSong/hotSauce.html",cover:"https://i1.sndcdn.com/artworks-000502190916-l6fxn9-t500x500.jpg"},
    {title: "Oh Me Oh My",link: "https://youtu.be/z6QxAIahB-s?si=ywtQJpzbOlKzaVbr",cover:"https://i1.sndcdn.com/artworks-000502190916-l6fxn9-t500x500.jpg"},  
    {title: "Ooo Nana",link: "https://youtu.be/Ox_ylC4iVtA?si=Vsr2NyDejf8HYfx3",cover:"https://i1.sndcdn.com/artworks-000502190916-l6fxn9-t500x500.jpg"},  
    {title: "Pour Up",link: "otherSong/pourUp.html",cover:"https://i1.sndcdn.com/artworks-000502190916-l6fxn9-t500x500.jpg"},
    {title: "RaRa",link: "https://youtu.be/uUHLc32MqB0?si=kO5mxSTH4Bsg0jpW",cover:"https://i1.sndcdn.com/artworks-000502190916-l6fxn9-t500x500.jpg"},  
    {title: "Hooch",link: "https://youtu.be/P6PXqRTpTo4?si=tbn0J4lQ8Yi4UwHV",cover:"https://i1.sndcdn.com/artworks-000502190916-l6fxn9-t500x500.jpg"},  
    {title: "Uber Everywhere",link: "https://youtu.be/PXa1cIJVDls?si=su4y8fe0QzMLPL2r",cover:"https://i1.sndcdn.com/artworks-000502190916-l6fxn9-t500x500.jpg"},
    {title: "Yah Yah",link: "https://youtu.be/eN_W910LKpE?si=yf3JJmBO2A1zsJCG",cover:"https://i1.sndcdn.com/artworks-000502190916-l6fxn9-t500x500.jpg"},
    //BIRDS IN THE TRAP SING MCKNIGHT
    {title: "the ends",link: "https://youtu.be/hF1sqWiqppE?si=W1USvMVd1eEh6IV5",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"},
    {title: "way back",link: "https://youtu.be/1kgw0vubj9U?si=w0D-V5jZ4fmp2XmL",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"}, 
    {title: "coordinate",link: "https://youtu.be/Eyt40gCbYeU?si=CGJ8D_8ZTVmihXFa",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"}, 
    {title: "through the late night",link: "https://youtu.be/zojCw8_AdRg?si=uLkJtx_Ud_MgnE4Y",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"}, 
    {title: "beibs in the trap",link: "https://youtu.be/zmFm9Yp80dE?si=HKkTYHfRhp6j6gYW",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"}, 
    {title: "sdp interlude",link: "https://youtu.be/krJLPDrIHWU?si=Cd7LfuX1H6fy2UT7",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"}, 
    {title: "sweet sweet",link: "https://youtu.be/vlFAZ1f8IIo?si=W0zTXxaEEUomTG9O",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"}, 
    {title: "outside",link: "https://youtu.be/Zkp64jjajs0?si=FX-fpacI5ETP13oH",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"}, 
    {title: "goosebumps",link: "https://youtu.be/Dst9gZkq1a8?si=uI0FaZDFgquIlDEZ",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"}, 
    {title: "first take",link: "https://youtu.be/OBSo462NeIA?si=oj5aRZ0b7PvWUCea",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"}, 
    {title: "pick up the phone",link: "https://youtu.be/VAybGW3DI9Q?si=ChK4yGRHWwFXHgj7",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"}, 
    {title: "lose",link: "https://youtu.be/4MjTRUglk8w?si=YEGv5NMHJZ_P5cpo",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"},
    {title: "guidance",link: "https://youtu.be/1_mEWBBvUyE?si=ZPNNATqHFVNKJKB-",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"}, 
    {title: "wonderful",link: "https://youtu.be/XqCgH83_phI?si=x54W0FIGgH1zNrmJ",cover:"https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce"}, 
    //HUNCHO JACK, JACK HUNCHO
    {title: "Modern Slavery",link: "https://youtu.be/lLfBfsaGMlM?si=6ynr9T1f59cR7YKS",cover:"https://i.scdn.co/image/ab67616d0000b273ef63d20a2345cca7477bf691"},
    {title: "Black & Chinese",link: "https://youtu.be/Xg8ZeWGLF6E?si=sqeU2JwQQGB5kyXp",cover:"https://i.scdn.co/image/ab67616d0000b273ef63d20a2345cca7477bf691"}, 
    {title: "Eye 2 Eye",link: "https://youtu.be/ZdtobM01EHM?si=eg_WZitDU6sntZZg",cover:"https://i.scdn.co/image/ab67616d0000b273ef63d20a2345cca7477bf691"}, 
    {title: "Motorcycle Patches",link: "https://youtu.be/vx_trQYHpNc?si=GKmzKPz9n3m6-RwR",cover:"https://i.scdn.co/image/ab67616d0000b273ef63d20a2345cca7477bf691"}, 
    {title: "Huncho Jack",link: "https://youtu.be/wdrAUrsZdzs?si=KkZ0btecA_t_2STS",cover:"https://i.scdn.co/image/ab67616d0000b273ef63d20a2345cca7477bf691"}, 
    {title: "Saint",link: "https://youtu.be/xgJktfkp06c?si=23HDpzO9NcmSpITD",cover:"https://i.scdn.co/image/ab67616d0000b273ef63d20a2345cca7477bf691"}, 
    {title: "Go",link: "https://youtu.be/W15GoxmuiKw?si=YRmIt5yRgncq0-K3",cover:"https://i.scdn.co/image/ab67616d0000b273ef63d20a2345cca7477bf691"}, 
    {title: "Dubai Shit",link: "https://youtu.be/dJ7bquKFC4E?si=_DnclwfNSnIVBXHT",cover:"https://i.scdn.co/image/ab67616d0000b273ef63d20a2345cca7477bf691"}, 
    {title: "Saint Laurent Mask",link: "https://youtu.be/RuWrt983xAs?si=_-0fTACrI226sys2",cover:"https://i.scdn.co/image/ab67616d0000b273ef63d20a2345cca7477bf691"}, 
    {title: "Moon Rock",link: "https://youtu.be/1xPw0g-sqcA?si=7HTA1SzWlD-vt19f",cover:"https://i.scdn.co/image/ab67616d0000b273ef63d20a2345cca7477bf691"}, 
    {title: "How U Feel",link: "https://youtu.be/Ozz3ALcXPws?si=lOH4X6ZeTJEx-Vpw",cover:"https://i.scdn.co/image/ab67616d0000b273ef63d20a2345cca7477bf691"}, 
    {title: "Where U From",link: "https://youtu.be/R9IOZ2a5Zyw?si=Il48iJNgQqB1PQZi",cover:"https://i.scdn.co/image/ab67616d0000b273ef63d20a2345cca7477bf691"},
    {title: "Best Man",link: "https://youtu.be/WOwLJ4f9PvM?si=qwPUvgW_WHqLspDg",cover:"https://i.scdn.co/image/ab67616d0000b273ef63d20a2345cca7477bf691"},
    //ASTROWORLD
    {title: "Stargazing",link: "https://youtu.be/2a8PgqWrc_4?si=GKr2mywXfYWtSYtA",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "Carousel",link: "https://youtu.be/qe-gnV-lvfE?si=b6WO2DHKSLxYAl31",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "Sicko Mode",link: "https://youtu.be/d-JBBNg8YKs?si=aA8TItprmXSeh4hu",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "R.I.P. Screw",link: "https://youtu.be/oBOmHWo14Xk?si=7uBx3xfRhT2hNrIl",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "Stop Trying to Be God",link: "https://youtu.be/AcXp7m1g5yE?si=uNW7aJ_NjgQl84hm",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "No Bystanders",link: "https://youtu.be/OhXVLFpAAKY?si=UEbzpcUDRLjQKnvt",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "Skeletons",link: "https://youtu.be/tAyYYKcySXA?si=poKzz9Uu15sWDl3J",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "Wake Up",link: "https://youtu.be/yChnkXhauwM?si=7_RU8KO44bK_Iwzv",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "5% Tint",link: "https://youtu.be/6SLD1ZQZ_4Y?si=8MKfXWZL2HPQqABH",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "NC-17",link: "https://youtu.be/K2taklQnVzY?si=i9nOoZ4hJ9G86mnh",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "Astrothunder",link: "https://youtu.be/Pa67b28h0vY?si=7mwYbsAgXekLa6jw",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "Yosemite",link: "https://youtu.be/ykMHDKB0-1o?si=ZUj7Znt3TbesciVK",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "Can't Say",link: "https://youtu.be/gpnQhbOMQDA?si=rP5bTHxK7Mgl-Rlz",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "Who? What!",link: "https://youtu.be/gLkQA7iLNUk?si=MbX40DrjOAxdfNXm",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "Butterfly Effect",link: "https://youtu.be/_EyZUTDAH0U?si=pidF-4gkD1eiY9Xl",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "Houstonfornication",link: "https://youtu.be/XzmnM2PLPfs?si=AIwn4wcgs1fsHyuI",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    {title: "Coffee Bean",link: "https://youtu.be/Z6d3BofQqN0?si=TFUNK8PjFrsX8seR",cover:"https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3"},
    //JACKBOYS
    {title: "HIGHEST IN THE ROOM (REMIX)",link: "https://youtu.be/CSboT1WFX7E?si=z_yAabLOJgHFaq3J",cover:"https://i.scdn.co/image/ab67616d0000b273dfc2f59568272de50a257f2f"},
    {title: "JACKBOYS",link: "https://youtu.be/Um-dwWTcFM8?si=zaZZmaw2NxKFiRnU",cover:"https://i.scdn.co/image/ab67616d0000b273dfc2f59568272de50a257f2f"}, 
    {title: "GANG GANG",link: "https://youtu.be/RIuk23XHYj0?si=-A0hUMXflsomrxGu",cover:"https://i.scdn.co/image/ab67616d0000b273dfc2f59568272de50a257f2f"}, 
    {title: "Had Enough",link: "https://youtu.be/fdfj1qstqh8?si=7fC30ElCGD_RrdZp",cover:"https://i.scdn.co/image/ab67616d0000b273dfc2f59568272de50a257f2f"}, 
    {title: "OUT WEST",link: "https://youtu.be/Z4reQmzuB4M?si=VnjJEUGeanckyCkk",cover:"https://i.scdn.co/image/ab67616d0000b273dfc2f59568272de50a257f2f"}, 
    {title: "WHAT TO DO?",link: "https://youtu.be/oQ09Bw2Q4nI?si=OBUbJvDND9sd99Q9",cover:"https://i.scdn.co/image/ab67616d0000b273dfc2f59568272de50a257f2f"}, 
    {title: "GATTI",link: "https://youtu.be/kx7P_ENnDPE?si=Y0G_IpToYfshMsPn",cover:"https://i.scdn.co/image/ab67616d0000b273dfc2f59568272de50a257f2f"},
    //UTOPIA
    {title: "HYAENA",link: "https://youtu.be/N20q-391r48?si=FJM21nU3pc9fsoqu",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"},
    {title: "THANK GOD",link: "https://youtu.be/UVtTc4zqbxQ?si=J9zeRtLSbCh75Xua",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"}, 
    {title: "MODERN JAM",link: "https://youtu.be/g8IvO7OwdaM?si=ChUscL_3YzEoLokO",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"}, 
    {title: "MY EYES",link: "https://youtu.be/pildU9lK6vM?si=j2TOART3naCWI8uL",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"}, 
    {title: "GOD'S COUNTRY",link: "https://youtu.be/omrJYLHe-tI?si=R60puErLI7kWB2F7",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"}, 
    {title: "SIRENS",link: "https://youtu.be/uiGSFeYu7mA?si=YWsiI38UkqMmd-Xm",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"}, 
    {title: "MELTDOWN",link: "https://youtu.be/LuKm4L9ryB0?si=eSA2OvwIRSMKr8EK",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"},
    {title: "FE!N",link: "https://youtu.be/B9synWjqBn8?si=xOAG9r7FQlkJaUAA",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"},
    {title: "DELRESTO (ECHOES)",link: "https://youtu.be/vM34QWOrz4A?si=9zxt9iAWI89mFo0b",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"}, 
    {title: "I KNOW ?",link: "https://youtu.be/fmdLsdmYzTo?si=JwW6_q3TEaUt_lrV",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"}, 
    {title: "TOPIA TWINS",link: "https://youtu.be/J4nvbKBuEBU?si=1oU0gakcEwvVSs9G",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"}, 
    {title: "CIRCUS MAXIMUS",link: "https://youtu.be/BwhRWpHxKdM?si=uO1p45cEESaDBO8o",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"}, 
    {title: "PARASAIL",link: "https://youtu.be/aEiD3UZDmiY?si=M7-KNDSXfwhkAlgi",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"}, 
    {title: "SKITZO",link: "https://youtu.be/Zk-4WvSPpac?si=wQBXxk6-qxrVmVKt",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"},
    {title: "LOST FOREVER",link: "https://youtu.be/VpjW2yytsPk?si=VJo_fU1e3cdB2lFL",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"},
    {title: "LOOOVE",link: "https://youtu.be/tPdPgFhdp58?si=OgX9ux-5ofTk12YX",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"}, 
    {title: "K-POP",link: "https://youtu.be/XOQcDjRUJHA?si=KFY-l_5AROsoZtnU",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"}, 
    {title: "TELEKINESIS",link: "https://youtu.be/xl5LunV-OkU?si=8hTix_96hUglXVPN",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"}, 
    {title: "TIL FURTHER NOTICE",link: "https://youtu.be/zptRsa1pqsk?si=h_9GsvS24sGsqrp1",cover:"https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44"},
    //album 0-121 (sono 122)
    //SINGOLI
    // {title: "Whole Lotta Lovin'",link: "https://youtu.be/-i9bvwY76Pw?si=kywmG8FH7-6jE2Lx",cover: "https://i.scdn.co/image/ab67616d0000b2730be52c4adc81385794b1dd80"},
    // {title: "A-Team",link: "https://youtu.be/HioPaqrdZvA?si=GdqEvIbF7HTxhEba",cover: "https://i.scdn.co/image/ab67616d0000b273d0c92f4f71a3c437f620a366"},
    // {title: "Go Off",link: "https://youtu.be/0TxcJ3Ud-To?si=P7WTZfgo3C3xJVkm",cover: "https://i.scdn.co/image/ab67616d0000b2733652f0472d36314ff32c2363"},   
    // {title: "Watch",link: "https://youtu.be/P3iLo_JI9oY?si=iNrHhnUOk2eVnv0L",cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGb6wS-ZL7dXNV6IZVU0NdCv9YC1QEiR1P5g&s"},  
    // {title: "SICKO MODE (Skrillex Remix)",link: "https://youtu.be/RFyC6nZF5DI?si=Hwa1Iy-h8VYX_FLZ",cover: "https://i.scdn.co/image/ab67616d0000b27318af0e1a13629cb52ec1ecb2"},  
    /*
{
        title: "",
        link: "",
        cover: ""
      },    
    */
  ];

const header = document.getElementById("header");

const mainStart = document.getElementById("mainStart");
const mod = document.getElementById("mod");
const buttonAlbum = document.getElementById("buttonAlbum");
const buttonSingle = document.getElementById("buttonSingle");
const buttonFeat = document.getElementById("buttonFeat");
const buttonAll = document.getElementById("buttonAll");
const rules = document.getElementById("rules");
const rulesButton = document.getElementById("rulesButton");

const mainVs = document.getElementById("mainVs");
const cover1 = document.getElementById("cover1");
const linkSong1 = document.getElementById("linkSong1");
const nameSong1 = document.getElementById("nameSong1");
const cover2 = document.getElementById("cover2");
const linkSong2 = document.getElementById("linkSong2");
const nameSong2 = document.getElementById("nameSong2");
const barra = document.getElementById("barra");
const progress = document.getElementById("progress");

const voteSong1 = document.getElementById("voteSong1");
const voteBoth = document.getElementById("voteBoth");
const voteSong2 = document.getElementById("voteSong2");

const mainEnd = document.getElementById("mainEnd");
const buttonHome = document.getElementById("home");

let fiveSong = [
  {title: "",link: "",cover:"",point:0},
  {title: "",link: "",cover:"",point:0},
  {title: "",link: "",cover:"",point:0},
  {title: "",link: "",cover:"",point:0},
  {title: "",link: "",cover:"",point:0}
];
let counter=0;

let coppie = [
  {first: 0,second:1},
  {first: 2,second:3},
  {first: 0,second:4},
  {first: 1,second:2},
  {first: 3,second:4},
  {first: 0,second:2},
  {first: 1,second:4},
  {first: 0,second:3},
  {first: 2,second:4},
  {first: 1,second:3},
];

buttonAlbum.addEventListener('click', function(){
  randomizeFiveSong(0, 122);
  fight();
});

buttonSingle.addEventListener('click', 
// function(){
//   randomizeFiveSong(122, 6);
//   fight();
// }
warning
);

buttonFeat.addEventListener('click', warning);
buttonAll.addEventListener('click', function(){
  randomizeFiveSong(0, song.length  );
  fight();
});

function warning(){alert("NOT YET AVIABLE");}

function randomizeFiveSong(from, to){
  fiveSong = [
    {title: "",link: "",cover:"",point:0},
    {title: "",link: "",cover:"",point:0},
    {title: "",link: "",cover:"",point:0},
    {title: "",link: "",cover:"",point:0},
    {title: "",link: "",cover:"",point:0}
  ];
  let tempFiveTitle = [];
  for (let i = 0; i < 5; i++) {
    let random = Math.floor(Math.random()*(to));
    random+=from;
    while(tempFiveTitle.includes(song[random].title)){
      random = Math.floor(Math.random()*(to));
      random+=from;
    };
    tempFiveTitle.push(song[random].title);
    fiveSong[i].title = (song[random].title);
    fiveSong[i].link = (song[random].link);
    fiveSong[i].cover = (song[random].cover);
  }
}

function fight(){
  mainStart.style.display = "none";
  mainVs.style.display = "flex";

  fillFiveSong();
}

function fillFiveSong(){
  cover1.src = fiveSong[coppie[counter].first].cover;
  nameSong1.innerHTML = fiveSong[coppie[counter].first].title;
  linkSong1.href = fiveSong[coppie[counter].first].link;
  cover2.src = fiveSong[coppie[counter].second].cover;
  nameSong2.innerHTML = fiveSong[coppie[counter].second].title;
  linkSong2.href = fiveSong[coppie[counter].second].link;
}

function fillMainEnd(){
  mainVs.style.display = "none";
  mainEnd.style.display = "block";
  fiveSong.sort(function(a, b){return a.point-b.point;});
  fiveSong.reverse();

  document.getElementById("linkSongEnd1").href = fiveSong[0].link;
  document.getElementById("nameSongEnd1").innerHTML = "1. " + fiveSong[0].title + " (POINT : " + fiveSong[0].point + ")";
  document.getElementById("linkSongEnd2").href = fiveSong[1].link;
  document.getElementById("nameSongEnd2").innerHTML = "2. " + fiveSong[1].title + " (POINT : " + fiveSong[1].point + ")";
  document.getElementById("linkSongEnd3").href = fiveSong[2].link;
  document.getElementById("nameSongEnd3").innerHTML = "3. " + fiveSong[2].title + " (POINT : " + fiveSong[2].point + ")";
  document.getElementById("linkSongEnd4").href = fiveSong[3].link;
  document.getElementById("nameSongEnd4").innerHTML = "4. " + fiveSong[3].title + " (POINT : " + fiveSong[3].point + ")";
  document.getElementById("linkSongEnd5").href = fiveSong[4].link;
  document.getElementById("nameSongEnd5").innerHTML = "5. " + fiveSong[4].title + " (POINT : " + fiveSong[4].point + ")"; 
}

voteSong1.addEventListener('click', function(){
  fiveSong[coppie[counter].first].point += 3;
  
  counter++;
  progress.style.width = counter*30 + "px";
  if(counter<10) fillFiveSong();
  else fillMainEnd();
});

voteBoth.addEventListener('click', function(){
  fiveSong[coppie[counter].first].point += 1;
  fiveSong[coppie[counter].second].point += 1;
  counter++;
  progress.style.width = counter*30 + "px";
  if(counter<10) fillFiveSong();
  else fillMainEnd();
});

voteSong2.addEventListener('click', function(){
  fiveSong[coppie[counter].second].point += 3;
  counter++;
  progress.style.width = counter*30 + "px";
  if(counter<10) fillFiveSong();
  else fillMainEnd();
});

buttonHome.addEventListener('click', function(){
  mainEnd.style.display = "none";
  mainStart.style.display = "block";
  counter = 0;
  progress.style.width = 0 + "px";
});

rulesButton.addEventListener('click', function(){
  if(rules.style.visibility == "visible") {
    rules.style.opacity =  0;
    rules.style.visibility = "hidden";
    mod.style.visibility = "visible";
  }
  else if(rules.style.visibility == "hidden") {
    mod.style.visibility = "hidden";
    rules.style.visibility = "visible";
    rules.style.opacity =  1;
  }
});