using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChoiceLogic : MonoBehaviour
{
    void Start(){
        gameObject.SetActive(false);
    }
    public void AutismSymptomChoice(){
        GlobalVars.autismScore++;
        EndDialogue();
    }

    public void EndDialogue(){
        StopAllCoroutines();
        FindObjectOfType<Dialogue>().EndDialogue();
    }

    public void Activate(){
        gameObject.SetActive(true);
    }
}
