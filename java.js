// variabeles
{
    var SignA = document.getElementById('SignA');
    var SignB = document.getElementById('SignB');
    var SignC = document.getElementById('SignC');
    var SignD = document.getElementById('SignD');
    var SignE = document.getElementById('SignE');
    var SignF = document.getElementById('SignF');
    var SignG = document.getElementById('SignG');
    var SignH = document.getElementById('SignH');
    var SignI = document.getElementById('SignI');
    var SignJ = document.getElementById('SignJ');
    var SignK = document.getElementById('SignK');
    var SignL = document.getElementById('SignL');
    var SignM = document.getElementById('SignM');
    var SignN = document.getElementById('SignN');
    var SignO = document.getElementById('SignO');
    var SignP = document.getElementById('SignP');
    var SignQ = document.getElementById('SignQ');
    var SignR = document.getElementById('SignR');
    var SignS = document.getElementById('SignS');
    var SignT = document.getElementById('SignT');
    var SignU = document.getElementById('SignU');
    var SignV = document.getElementById('SignV');
    var SignW = document.getElementById('SignW');
    var SignX = document.getElementById('SignX');
    var SignY = document.getElementById('SignY');
    var SignZ = document.getElementById('SignZ');

    var A = document.getElementById('A');
    var B = document.getElementById('B');
    var C = document.getElementById('C');
    var D = document.getElementById('D');
    var E = document.getElementById('E');
    var F = document.getElementById('F');
    var G = document.getElementById('G');
    var H = document.getElementById('H');
    var I = document.getElementById('I');
    var J = document.getElementById('J');
    var K = document.getElementById('K');
    var L = document.getElementById('L');
    var M = document.getElementById('M');
    var N = document.getElementById('N');
    var O = document.getElementById('O');
    var P = document.getElementById('P');
    var Q = document.getElementById('Q');
    var R = document.getElementById('R');
    var S = document.getElementById('S');
    var T = document.getElementById('T');
    var U = document.getElementById('U');
    var V = document.getElementById('V');
    var W = document.getElementById('W');
    var X = document.getElementById('X');
    var Y = document.getElementById('Y');
    var Z = document.getElementById('Z');

    var highscoreUser = document.getElementById('highscoreUser');
    var uitgespeeld = 0;
    var gewonnen = false;
    var score = 0;
}

// CHECKING IF 2 IS SELECTED UNTIL SPAN COMES UP
function twoChecked(){
    var radios = document.querySelectorAll('input[type="radio"]:checked');
    return radios.length > 1;
}
// when you winn
function highscore() {
    alert("gefeliciteerd je score is :" + score);
    highscoreUser.style.display = "block";
    document.getElementById('scoreUser').value = score;
    console.log(document.getElementById('scoreUser').value);
}


// SELECTING IMAGE WHEN CLICKED
function selected(rb) {
    if (rb.checked)
    {
        rb.parentNode.style.border = "5px solid red";
    } else if(!rb.disabled && !rb.checked) {
        rb.parentNode.style.border = "none";
    }else if (rb.disabled){
        rb.parentNode.style.border = "5px solid green";
        rb.parentNode.style.color ="white";

    }
}

// REPEATING THE SELECTED IMAGES

setInterval(function Repeat(){
    selected(SignA);
    selected(SignB);
    selected(SignC);
    selected(SignD);
    selected(SignE);
    selected(SignF);
    selected(SignG);
    selected(SignH);
    selected(SignI);
    selected(SignJ);
    selected(SignK);
    selected(SignL);
    selected(SignM);
    selected(SignN);
    selected(SignO);
    selected(SignP);
    selected(SignQ);
    selected(SignR);
    selected(SignS);
    selected(SignT);
    selected(SignU);
    selected(SignV);
    selected(SignW);
    selected(SignX);
    selected(SignY);
    selected(SignZ);

    selected(A);
    selected(B);
    selected(C);
    selected(D);
    selected(E);
    selected(F);
    selected(G);
    selected(H);
    selected(I);
    selected(J);
    selected(K);
    selected(L);
    selected(M);
    selected(N);
    selected(O);
    selected(P);
    selected(Q);
    selected(R);
    selected(S);
    selected(T);
    selected(U);
    selected(V);
    selected(W);
    selected(X);
    selected(Y);
    selected(Z);

    if (uitgespeeld == 26) {
        uitgespeeld++;
        gewonnen = true;
        highscore();
    }

// CHECKING IF ANSWER IS CORRECT

    if (A.checked && SignA.checked) {

        A.checked = false;
        SignA.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        A.disabled = true;
        SignA.disabled = true;
        uitgespeeld++;
    }
    else if (B.checked && SignB.checked) {

        B.checked = false;
        SignB.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        B.disabled = true;
        SignB.disabled = true;
        uitgespeeld++;
    }
    else if (C.checked && SignC.checked) {

        C.checked = false;
        SignC.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        C.disabled = true;
        SignC.disabled = true;
        uitgespeeld++;
    }
    else if (D.checked && SignD.checked) {

        D.checked = false;
        SignD.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        D.disabled = true;
        SignD.disabled = true;
        uitgespeeld++;
    }
    else if (E.checked && SignE.checked) {

        E.checked = false;
        SignE.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        E.disabled = true;
        SignE.disabled = true;
        uitgespeeld++;
    }
    else if (F.checked && SignF.checked) {

        F.checked = false;
        SignF.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        F.disabled = true;
        SignF.disabled = true;
        uitgespeeld++;
    }
    else if (G.checked && SignG.checked) {

        G.checked = false;
        SignG.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        G.disabled = true;
        SignG.disabled = true;
        uitgespeeld++;
    }
    else if (H.checked && SignH.checked) {

        H.checked = false;
        SignH.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        H.disabled = true;
        SignH.disabled = true;
        uitgespeeld++;
    }
    else if (I.checked && SignI.checked) {

        I.checked = false;
        SignI.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        I.disabled = true;
        SignI.disabled = true;
        uitgespeeld++;
    }
    else if (J.checked && SignJ.checked) {

        J.checked = false;
        SignJ.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        J.disabled = true;
        SignJ.disabled = true;
        uitgespeeld++;
    }
    else if (K.checked && SignK.checked) {

        K.checked = false;
        SignK.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        K.disabled = true;
        SignK.disabled = true;
        uitgespeeld++;
    }
    else if (L.checked && SignL.checked) {

        L.checked = false;
        SignL.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        L.disabled = true;
        SignL.disabled = true;
        uitgespeeld++;
    }
    else if (M.checked && SignM.checked) {

        M.checked = false;
        SignM.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        M.disabled = true;
        SignM.disabled = true;
        uitgespeeld++;
    }
    else if (N.checked && SignN.checked) {

        N.checked = false;
        SignN.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        N.disabled = true;
        SignN.disabled = true;
        uitgespeeld++;
    }
    else if (O.checked && SignO.checked) {

        O.checked = false;
        SignO.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        O.disabled = true;
        SignO.disabled = true;
        uitgespeeld++;
    }
    else if (P.checked && SignP.checked) {

        P.checked = false;
        SignP.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        P.disabled = true;
        SignP.disabled = true;
        uitgespeeld++;
    }
    else if (Q.checked && SignQ.checked) {

        Q.checked = false;
        SignQ.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        Q.disabled = true;
        SignQ.disabled = true;
        uitgespeeld++;
    }
    else if (R.checked && SignR.checked) {

        R.checked = false;
        SignR.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        R.disabled = true;
        SignR.disabled = true;
        uitgespeeld++;
    }
    else if (S.checked && SignS.checked) {

        S.checked = false;
        SignS.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        S.disabled = true;
        SignS.disabled = true;
        uitgespeeld++;
    }
    else if (T.checked && SignT.checked) {

        T.checked = false;
        SignT.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        T.disabled = true;
        SignT.disabled = true;
        uitgespeeld++;
    }
    else if (U.checked && SignU.checked) {

        U.checked = false;
        SignU.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        U.disabled = true;
        SignU.disabled = true;
        uitgespeeld++;
    }
    else if (V.checked && SignV.checked) {

        V.checked = false;
        SignV.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        V.disabled = true;
        SignV.disabled = true;
        uitgespeeld++;
    }
    else if (W.checked && SignW.checked) {

        W.checked = false;
        SignW.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        W.disabled = true;
        SignW.disabled = true;
        uitgespeeld++;
    }
    else if (X.checked && SignX.checked) {

        X.checked = false;
        SignX.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        X.disabled = true;
        SignX.disabled = true;
        uitgespeeld++;
    }
    else if (Y.checked && SignY.checked) {

        Y.checked = false;
        SignY.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        Y.disabled = true;
        SignY.disabled = true;
        uitgespeeld++;
    }
    else if (Y.checked && SignY.checked) {

        Y.checked = false;
        SignY.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        Y.disabled = true;
        SignY.disabled = true;
        uitgespeeld++;
    }
    else if (Z.checked && SignZ.checked) {

        Z.checked = false;
        SignZ.checked = false;
        score = score + 1;
        document.getElementById('score').innerHTML = score;
        Z.disabled = true;
        SignZ.disabled = true;
        uitgespeeld++;
    }

// CHANGING SPAN TO RED IF NOT CORRECT ANSWER

    else if(twoChecked()){
        score = score - 1;

        var alfabet =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",'Y','Z'];

        for (var i = 0; i < alfabet.length; i++) {
            document.getElementById('Sign' + alfabet[i]).checked = false;
            document.getElementById(alfabet[i]).checked = false;

        }
        document.getElementById('score').innerHTML = score;
    }
    }
    , 100);


