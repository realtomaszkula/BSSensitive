  let _rgx = {
      buttonSeat:  /Seat #(\d) is the button/,
      playerNicks:  /(^.+?)(?=\(\$\d+)/,
      playerCards: /\(\$([\d|\.]+) in chips\)$/gm,
      betSize: /\$(\d+(?:\.\d+)?)$/gm,
      preflopNick: /(^.+)(?:\: calls |\: raises |\: checks)/gm,     // not including folds
      postflopNick: /(^.+)(?:\: bets|\: calls |\: raises |\: checks |\: folds)/gm,
      pot: /Total pot \$((\d+)(\.\d+)?)/,
      stakes: /\(([^\/]+)\/([^\)]+)\)/,
      time:  /\[(\d\d\d\d)[/](\d\d)[/](\d\d)\s(\d\d?):(\d\d):(\d\d)/,
      board: /Board \[([2-9|T|J|Q|K|A][s|c|d|h])\s([2-9|T|J|Q|K|A][s|c|d|h])\s([2-9|T|J|Q|K|A][s|c|d|h])[\]|\s]([2-9|T|J|Q|K|A][s|c|d|h])?[\]|\s]([2-9|T|J|Q|K|A][s|c|d|h])?/,
      heroName: /Dealt to (.+?(?=[[][2-9|T|J|Q|K|A][s|c|d|h]\s[2-9|T|J|Q|K|A][s|c|d|h]))/,
      heroCards: /[[]([2-9|T|J|Q|K|A][s|c|d|h](?:\s[2-9|T|J|Q|K|A][s|c|d|h]){1,3})/
}