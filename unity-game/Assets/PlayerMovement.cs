using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    //private float horizontal;
    [SerializeField] private float speed = 2f;
  //  private float jumpingPower = 16f;
  //  private bool isFacingRight = true;

    private Vector2 movementDirection;

    private Rigidbody2D rb;
  //  [SerializeField] private Transform groundCheck;
  //  [SerializeField] private LayerMask groundLayer;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        /*horizontal = Input.GetAxisRaw("Horizontal");

        if(Input.GetButtonDown("Jump") && isGrounded()){
          rb.velocity = new Vector2(rb.velocity.x, jumpingPower);
        }

        if(Input.GetButtonUp("Jump") && rb.velocity.y > 0f){
          rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);
        }

        Flip(); */

        movementDirection = new Vector2(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"));
    }

    void FixedUpdate(){
      rb.velocity = movementDirection * speed;
    }

    /*private bool isGrounded(){
      return Physics2D.OverlapCircle(groundCheck.position, 0.2f, groundLayer);
    }
    private void Flip(){
      if(isFacingRight && horizontal < 0f || !isFacingRight && horizontal > 0f){
        isFacingRight = !isFacingRight;
        Vector3 localScale = transform.localScale;
        localScale.x *= -1f;
        transform.localScale = localScale;
      }
    } */
}
