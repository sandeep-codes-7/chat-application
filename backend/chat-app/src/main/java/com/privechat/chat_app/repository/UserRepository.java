package com.privechat.chat_app.repository;

import com.privechat.chat_app.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Optional<User> findByName(String name);

    Optional<User> findByEmail(String email);

}
