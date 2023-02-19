using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NegativeResult : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        if(GlobalVars.autismScore < 3){
          gameObject.SetActive(true);

        } else {
          gameObject.SetActive(false);
        }
    }


    // Update is called once per frame
    void Update()
    {

    }
}
