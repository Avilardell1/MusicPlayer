export async function play(remoteURL) {
    const player = new Player(remoteURL, {
            continuesToPlayInBackground: true
        });

    return new Promise((resolve) => {
        player.play(() => {
            // now duration is available, so I resolve promise
            resolve(player);
        });
    });
}