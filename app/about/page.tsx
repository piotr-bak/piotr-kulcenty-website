"use client";
import { useContext, useEffect } from "react";
import { ThemeContex } from "../../context/ThemeContext";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/hooks";

export default function About() {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                scelerisque ligula quis bibendum tincidunt. Vestibulum vitae
                ligula elit. Vivamus faucibus suscipit purus, sit amet tristique
                justo venenatis et. Proin commodo risus nec mattis facilisis.
                Etiam lorem arcu, aliquet eu blandit et, bibendum sit amet orci.
                In ipsum nisi, fringilla pharetra libero aliquet, venenatis
                luctus mi. Ut ac feugiat velit. Fusce malesuada nibh et arcu
                accumsan, ut mattis est interdum. Praesent cursus imperdiet
                nulla, vel interdum ex porttitor semper. Suspendisse euismod,
                libero aliquet hendrerit rhoncus, risus nunc iaculis metus, id
                rhoncus felis diam et dolor. Etiam in hendrerit ligula. Morbi
                quam est, dapibus id leo sit amet, vulputate tincidunt dolor. Ut
                eget eleifend risus. Pellentesque lectus mauris, venenatis quis
                auctor id, porttitor eget nisi. Sed rutrum erat eget libero
                sagittis pellentesque. Sed dictum leo risus, a ornare elit
                accumsan ac. Pellentesque nec pretium orci. Nunc luctus id
                libero eget volutpat. Aliquam lobortis elit eget ligula mollis
                scelerisque. Nullam fermentum, metus sed laoreet dapibus, dolor
                ligula ultrices lacus, ut semper mauris felis id felis. Aenean
                sit amet sagittis ipsum, sed mattis nisl. Sed vel justo sit amet
                orci placerat viverra at ut augue. Morbi condimentum eget nulla
                at congue. Integer eget metus sodales, sodales ante eu,
                ultricies orci. Cras sit amet arcu in turpis molestie convallis.
                Integer porta diam et vulputate dapibus. Sed venenatis eros at
                lectus ullamcorper, non porta elit sagittis. Phasellus
                sollicitudin quis ligula rhoncus finibus. Duis semper varius
                nisi dapibus lobortis. Vestibulum ultricies, enim at suscipit
                fringilla, lacus tellus tempus odio, eu posuere purus nisl eget
                ante. Proin vel sapien consequat, porta nisi eget, vehicula
                nulla. Phasellus viverra massa in tincidunt imperdiet. Nulla
                facilisi. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean vestibulum magna et
                nulla euismod lacinia. Pellentesque tincidunt vehicula metus, a
                feugiat leo euismod at. Quisque finibus nulla eu libero feugiat,
                quis porttitor leo molestie. In luctus ligula at feugiat varius.
                Nulla ultrices justo et ipsum volutpat, vitae porta mi vehicula.
                Donec non est nec sapien commodo consequat ac a ante. Etiam
                euismod eros et sagittis vulputate. Integer sollicitudin et orci
                vitae malesuada. Donec commodo quis mi nec tincidunt. Interdum
                et malesuada fames ac ante ipsum primis in faucibus. Fusce dolor
                felis, sodales id enim eu, consectetur gravida risus. Nam ac
                diam mattis, suscipit leo nec, porttitor massa. Morbi ac finibus
                libero. Sed nec euismod tellus. Phasellus quis purus tempor,
                aliquet eros eu, hendrerit dui. Mauris vitae leo ullamcorper,
                auctor nunc a, rhoncus est. Nunc et magna ac felis lacinia
                venenatis. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Curabitur ornare efficitur leo, sit amet porttitor dui
                lobortis quis. Nullam aliquet ut mauris sed ultrices. Morbi
                efficitur mattis consectetur. Aliquam cursus egestas ultricies.
                Etiam vel tortor ante. Etiam nunc erat, fermentum ultricies
                venenatis vitae, auctor vitae mauris. Nunc elit erat, accumsan
                nec dui ut, eleifend tempus dui. Nam ullamcorper commodo sapien
                at tincidunt. Cras nisl tellus, egestas ultricies placerat sed,
                malesuada vel ipsum. Vivamus nec sapien eget dolor lobortis
                pharetra ac vel mauris. Praesent rutrum a tellus id ullamcorper.
                Suspendisse fermentum ipsum nec enim scelerisque auctor. Mauris
                in dictum risus. Curabitur quam diam, scelerisque pulvinar
                sollicitudin quis, accumsan et felis. Nulla facilisi. Praesent
                pretium consectetur nulla quis scelerisque. Mauris sed ipsum
                vitae diam porttitor dapibus. Proin tempor ante sollicitudin,
                iaculis libero et, rhoncus leo. Aliquam at imperdiet nisl, quis
                rutrum ligula. Nulla felis nunc, ultrices vel sagittis non,
                euismod non libero. Morbi vulputate ligula turpis, sit amet
                lobortis magna ultrices in. Sed venenatis lacus nec est
                convallis, id finibus urna volutpat. Sed vestibulum nec eros eu
                mollis. Integer sit amet efficitur ligula, sed interdum sem.
                Nulla facilisi. Suspendisse vitae leo massa. Nunc luctus lectus
                sit amet dapibus finibus. Curabitur sollicitudin eleifend
                bibendum. Suspendisse lacinia eros sed ipsum pretium, non
                volutpat nisi tristique. Sed luctus dui lacus, sit amet rhoncus
                est ultrices vel. Nunc id suscipit sapien, ut mattis nisl. In
                finibus velit id lorem efficitur lobortis. Aenean eu ex eget
                dolor tempus porta. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Duis at
                metus ex. Etiam efficitur, eros quis pharetra tincidunt, turpis
                eros dapibus ex, eu consequat nunc tortor vitae nibh. Sed sed
                ullamcorper massa, ut aliquam quam. Integer tincidunt pretium
                turpis vitae consequat. Fusce id urna condimentum, faucibus
                sapien ut, feugiat lacus. Donec eget vehicula velit. Etiam
                vehicula urna eu arcu fringilla, non consectetur elit volutpat.
                Fusce sollicitudin quam eu lacus mollis, id ultrices velit
                imperdiet. Sed facilisis mattis lacus ut iaculis. Duis ac congue
                nunc. Phasellus non nisl at risus pulvinar efficitur. Quisque
                blandit blandit tincidunt. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Maecenas
                eros magna, suscipit in ipsum ac, vulputate tincidunt purus. In
                velit massa, pharetra eu turpis ut, porttitor suscipit ligula.
                Integer vestibulum nibh ut turpis ullamcorper, quis lacinia
                augue lobortis. Nullam faucibus, diam ut condimentum
                consectetur, arcu mi finibus lorem, ac luctus ipsum ipsum vitae
                magna. Nullam lobortis urna ut sem pulvinar accumsan. Ut
                sagittis mattis urna, eu venenatis magna sodales id. Donec sed
                bibendum lectus, nec eleifend velit. In hac habitasse platea
                dictumst. Curabitur vitae lectus dictum, vulputate nisi sit
                amet, ultrices diam. Nulla sit amet purus turpis. Suspendisse
                sit amet diam tortor. Donec interdum elementum lorem vitae
                mollis. Donec maximus dapibus odio quis tincidunt. Nulla sed
                luctus velit. Integer sagittis quam ut elit volutpat, quis
                tincidunt orci sollicitudin. Cras molestie tincidunt euismod.
                Aliquam in porttitor enim. Integer nec porta massa. Ut cursus
                nisl sed magna pulvinar tempor. Quisque eros magna, egestas ut
                ex vel, pretium auctor massa. Integer at tincidunt sapien. Nulla
                eu massa neque. Sed vel sollicitudin tortor. Curabitur id tempor
                erat. Proin ac neque diam. Aenean ultricies mattis magna,
                sodales pellentesque purus volutpat et. Fusce non erat elit. Nam
                egestas arcu in risus mollis posuere. Proin fringilla neque non
                suscipit euismod. Ut pellentesque vel risus at maximus. Praesent
                vel nibh scelerisque orci aliquam congue ultricies eget lectus.
                In eleifend lorem a nisl vestibulum, nec euismod tortor
                tincidunt. Quisque sodales venenatis eros, non venenatis nisl
                ultricies semper. Curabitur vulputate dolor elit, in mattis nunc
                hendrerit vel. Praesent placerat massa eget auctor placerat.
                Etiam sed volutpat nisi. Sed maximus lectus erat, in
                pellentesque urna luctus id. Curabitur nec cursus urna, in
                faucibus quam. Integer suscipit semper purus, et fringilla lacus
                maximus id. Etiam ac nunc efficitur, viverra ipsum at,
                condimentum est. Phasellus lacinia sed tortor nec blandit. Nulla
                quis eros malesuada, dapibus justo et, facilisis ligula. In
                eleifend massa quis sollicitudin interdum. Morbi fermentum
                ultrices tempor. Mauris ante purus, pellentesque eu lacus in,
                aliquet varius mi. Fusce vulputate, mauris eu gravida semper,
                nulla est suscipit nisl, mollis dictum risus nulla id arcu. Sed
                at tincidunt odio. Donec finibus augue ipsum, nec aliquam eros
                euismod ut. Donec risus turpis, semper at posuere varius,
                egestas sit amet nunc. Ut sollicitudin faucibus malesuada. Sed
                vitae risus ac massa vestibulum eleifend at ac diam. Nulla a
                ligula sit amet arcu dignissim auctor. Suspendisse nec tortor
                eget risus finibus maximus. Curabitur sed maximus nunc. Proin
                tempus mauris vel imperdiet porta. Maecenas ultricies tincidunt
                scelerisque. Morbi dignissim, ligula eget faucibus congue, odio
                ante ultrices augue, vel pharetra augue lectus at turpis. Sed
                lacinia rutrum porta. Maecenas neque dui, gravida eget lacinia
                ut, hendrerit vitae ex. Nulla rhoncus tellus sit amet massa
                facilisis porttitor. Duis commodo felis vel neque porttitor
                feugiat. Mauris ut ullamcorper lacus, ut porttitor eros. Aenean
                ac massa orci. Ut sed dolor eget elit sollicitudin dapibus ac id
                est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras scelerisque ligula quis bibendum tincidunt. Vestibulum
                vitae ligula elit. Vivamus faucibus suscipit purus, sit amet
                tristique justo venenatis et. Proin commodo risus nec mattis
                facilisis. Etiam lorem arcu, aliquet eu blandit et, bibendum sit
                amet orci. In ipsum nisi, fringilla pharetra libero aliquet,
                venenatis luctus mi. Ut ac feugiat velit. Fusce malesuada nibh
                et arcu accumsan, ut mattis est interdum. Praesent cursus
                imperdiet nulla, vel interdum ex porttitor semper. Suspendisse
                euismod, libero aliquet hendrerit rhoncus, risus nunc iaculis
                metus, id rhoncus felis diam et dolor. Etiam in hendrerit
                ligula. Morbi quam est, dapibus id leo sit amet, vulputate
                tincidunt dolor. Ut eget eleifend risus. Pellentesque lectus
                mauris, venenatis quis auctor id, porttitor eget nisi. Sed
                rutrum erat eget libero sagittis pellentesque. Sed dictum leo
                risus, a ornare elit accumsan ac. Pellentesque nec pretium orci.
                Nunc luctus id libero eget volutpat. Aliquam lobortis elit eget
                ligula mollis scelerisque. Nullam fermentum, metus sed laoreet
                dapibus, dolor ligula ultrices lacus, ut semper mauris felis id
                felis. Aenean sit amet sagittis ipsum, sed mattis nisl. Sed vel
                justo sit amet orci placerat viverra at ut augue. Morbi
                condimentum eget nulla at congue. Integer eget metus sodales,
                sodales ante eu, ultricies orci. Cras sit amet arcu in turpis
                molestie convallis. Integer porta diam et vulputate dapibus. Sed
                venenatis eros at lectus ullamcorper, non porta elit sagittis.
                Phasellus sollicitudin quis ligula rhoncus finibus. Duis semper
                varius nisi dapibus lobortis. Vestibulum ultricies, enim at
                suscipit fringilla, lacus tellus tempus odio, eu posuere purus
                nisl eget ante. Proin vel sapien consequat, porta nisi eget,
                vehicula nulla. Phasellus viverra massa in tincidunt imperdiet.
                Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Aenean vestibulum
                magna et nulla euismod lacinia. Pellentesque tincidunt vehicula
                metus, a feugiat leo euismod at. Quisque finibus nulla eu libero
                feugiat, quis porttitor leo molestie. In luctus ligula at
                feugiat varius. Nulla ultrices justo et ipsum volutpat, vitae
                porta mi vehicula. Donec non est nec sapien commodo consequat ac
                a ante. Etiam euismod eros et sagittis vulputate. Integer
                sollicitudin et orci vitae malesuada. Donec commodo quis mi nec
                tincidunt. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Fusce dolor felis, sodales id enim eu, consectetur
                gravida risus. Nam ac diam mattis, suscipit leo nec, porttitor
                massa. Morbi ac finibus libero. Sed nec euismod tellus.
                Phasellus quis purus tempor, aliquet eros eu, hendrerit dui.
                Mauris vitae leo ullamcorper, auctor nunc a, rhoncus est. Nunc
                et magna ac felis lacinia venenatis. Interdum et malesuada fames
                ac ante ipsum primis in faucibus. Curabitur ornare efficitur
                leo, sit amet porttitor dui lobortis quis. Nullam aliquet ut
                mauris sed ultrices. Morbi efficitur mattis consectetur. Aliquam
                cursus egestas ultricies. Etiam vel tortor ante. Etiam nunc
                erat, fermentum ultricies venenatis vitae, auctor vitae mauris.
                Nunc elit erat, accumsan nec dui ut, eleifend tempus dui. Nam
                ullamcorper commodo sapien at tincidunt. Cras nisl tellus,
                egestas ultricies placerat sed, malesuada vel ipsum. Vivamus nec
                sapien eget dolor lobortis pharetra ac vel mauris. Praesent
                rutrum a tellus id ullamcorper. Suspendisse fermentum ipsum nec
                enim scelerisque auctor. Mauris in dictum risus. Curabitur quam
                diam, scelerisque pulvinar sollicitudin quis, accumsan et felis.
                Nulla facilisi. Praesent pretium consectetur nulla quis
                scelerisque. Mauris sed ipsum vitae diam porttitor dapibus.
                Proin tempor ante sollicitudin, iaculis libero et, rhoncus leo.
                Aliquam at imperdiet nisl, quis rutrum ligula. Nulla felis nunc,
                ultrices vel sagittis non, euismod non libero. Morbi vulputate
                ligula turpis, sit amet lobortis magna ultrices in. Sed
                venenatis lacus nec est convallis, id finibus urna volutpat. Sed
                vestibulum nec eros eu mollis. Integer sit amet efficitur
                ligula, sed interdum sem. Nulla facilisi. Suspendisse vitae leo
                massa. Nunc luctus lectus sit amet dapibus finibus. Curabitur
                sollicitudin eleifend bibendum. Suspendisse lacinia eros sed
                ipsum pretium, non volutpat nisi tristique. Sed luctus dui
                lacus, sit amet rhoncus est ultrices vel. Nunc id suscipit
                sapien, ut mattis nisl. In finibus velit id lorem efficitur
                lobortis. Aenean eu ex eget dolor tempus porta. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Duis at metus ex. Etiam efficitur, eros quis
                pharetra tincidunt, turpis eros dapibus ex, eu consequat nunc
                tortor vitae nibh. Sed sed ullamcorper massa, ut aliquam quam.
                Integer tincidunt pretium turpis vitae consequat. Fusce id urna
                condimentum, faucibus sapien ut, feugiat lacus. Donec eget
                vehicula velit. Etiam vehicula urna eu arcu fringilla, non
                consectetur elit volutpat. Fusce sollicitudin quam eu lacus
                mollis, id ultrices velit imperdiet. Sed facilisis mattis lacus
                ut iaculis. Duis ac congue nunc. Phasellus non nisl at risus
                pulvinar efficitur. Quisque blandit blandit tincidunt.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Maecenas eros magna, suscipit
                in ipsum ac, vulputate tincidunt purus. In velit massa, pharetra
                eu turpis ut, porttitor suscipit ligula. Integer vestibulum nibh
                ut turpis ullamcorper, quis lacinia augue lobortis. Nullam
                faucibus, diam ut condimentum consectetur, arcu mi finibus
                lorem, ac luctus ipsum ipsum vitae magna. Nullam lobortis urna
                ut sem pulvinar accumsan. Ut sagittis mattis urna, eu venenatis
                magna sodales id. Donec sed bibendum lectus, nec eleifend velit.
                In hac habitasse platea dictumst. Curabitur vitae lectus dictum,
                vulputate nisi sit amet, ultrices diam. Nulla sit amet purus
                turpis. Suspendisse sit amet diam tortor. Donec interdum
                elementum lorem vitae mollis. Donec maximus dapibus odio quis
                tincidunt. Nulla sed luctus velit. Integer sagittis quam ut elit
                volutpat, quis tincidunt orci sollicitudin. Cras molestie
                tincidunt euismod. Aliquam in porttitor enim. Integer nec porta
                massa. Ut cursus nisl sed magna pulvinar tempor. Quisque eros
                magna, egestas ut ex vel, pretium auctor massa. Integer at
                tincidunt sapien. Nulla eu massa neque. Sed vel sollicitudin
                tortor. Curabitur id tempor erat. Proin ac neque diam. Aenean
                ultricies mattis magna, sodales pellentesque purus volutpat et.
                Fusce non erat elit. Nam egestas arcu in risus mollis posuere.
                Proin fringilla neque non suscipit euismod. Ut pellentesque vel
                risus at maximus. Praesent vel nibh scelerisque orci aliquam
                congue ultricies eget lectus. In eleifend lorem a nisl
                vestibulum, nec euismod tortor tincidunt. Quisque sodales
                venenatis eros, non venenatis nisl ultricies semper. Curabitur
                vulputate dolor elit, in mattis nunc hendrerit vel. Praesent
                placerat massa eget auctor placerat. Etiam sed volutpat nisi.
                Sed maximus lectus erat, in pellentesque urna luctus id.
                Curabitur nec cursus urna, in faucibus quam. Integer suscipit
                semper purus, et fringilla lacus maximus id. Etiam ac nunc
                efficitur, viverra ipsum at, condimentum est. Phasellus lacinia
                sed tortor nec blandit. Nulla quis eros malesuada, dapibus justo
                et, facilisis ligula. In eleifend massa quis sollicitudin
                interdum. Morbi fermentum ultrices tempor. Mauris ante purus,
                pellentesque eu lacus in, aliquet varius mi. Fusce vulputate,
                mauris eu gravida semper, nulla est suscipit nisl, mollis dictum
                risus nulla id arcu. Sed at tincidunt odio. Donec finibus augue
                ipsum, nec aliquam eros euismod ut. Donec risus turpis, semper
                at posuere varius, egestas sit amet nunc. Ut sollicitudin
                faucibus malesuada. Sed vitae risus ac massa vestibulum eleifend
                at ac diam. Nulla a ligula sit amet arcu dignissim auctor.
                Suspendisse nec tortor eget risus finibus maximus. Curabitur sed
                maximus nunc. Proin tempus mauris vel imperdiet porta. Maecenas
                ultricies tincidunt scelerisque. Morbi dignissim, ligula eget
                faucibus congue, odio ante ultrices augue, vel pharetra augue
                lectus at turpis. Sed lacinia rutrum porta. Maecenas neque dui,
                gravida eget lacinia ut, hendrerit vitae ex. Nulla rhoncus
                tellus sit amet massa facilisis porttitor. Duis commodo felis
                vel neque porttitor feugiat. Mauris ut ullamcorper lacus, ut
                porttitor eros. Aenean ac massa orci. Ut sed dolor eget elit
                sollicitudin dapibus ac id est.
            </p>
        </>
    );
}
